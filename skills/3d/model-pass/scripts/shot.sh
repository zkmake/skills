#!/usr/bin/env bash
# Screenshot one studio view headless and print the stats readout.
# usage: shot.sh <session> <url> <absolute-out.png> [settle-ms=1500]
# The out path must be absolute: the agent-browser daemon's cwd is not yours.
set -euo pipefail

session=$1 url=$2 out=$3 settle=${4:-1500}

case $out in /*) ;; *) echo "shot.sh: out path must be absolute" >&2; exit 2 ;; esac

# Without these flags requestAnimationFrame stalls when the display sleeps: blank shots.
agent-browser --session "$session" --args "--disable-gpu-vsync,--disable-frame-rate-limit" set viewport 1200 800 >/dev/null
agent-browser --session "$session" open "$url" >/dev/null

# Heavy scenes take a while to draw their first frame: wait for the readout (up to 2 min).
stats=""
for _ in $(seq 1 120); do
  stats=$(agent-browser --session "$session" get text '#studio-stats' 2>/dev/null || true)
  [ -n "$stats" ] && break
  sleep 1
done

[ -z "$stats" ] && echo "shot.sh: #studio-stats never filled; is the studio rendering?" >&2

agent-browser --session "$session" wait "$settle" >/dev/null
agent-browser --session "$session" screenshot "$out" >/dev/null
echo "$out  $stats"
