#!/usr/bin/env bash
# Before/after comparison image, or a pixel diff.
#
# montage: compare.sh montage <out.png> <before1> <after1> [<before2> <after2> ...]
#          one row per pair (before left, after right), rows stacked, halved.
# diff:    compare.sh diff <before.png> <after.png>
#          prints differing pixels (3% fuzz) and their share; ~0.01% reads as identical.
set -euo pipefail

mode=$1; shift

case $mode in
  montage)
    out=$1; shift
    (( $# >= 2 && $# % 2 == 0 )) || { echo "compare.sh montage: give before/after pairs" >&2; exit 2; }
    rows=()
    while (( $# )); do rows+=( "(" "$1" "$2" +append ")" ); shift 2; done
    magick "${rows[@]}" -append -resize 50% +repage "$out"
    echo "$out"
    ;;
  diff)
    before=$1 after=$2
    # A white/black mask of pixels differing beyond the fuzz, then its white share. (`-metric AE`
    # alone weights by channel in ImageMagick 7.1.2+ and undercounts.)
    read -r pixels total < <(
      magick compare -fuzz 3% "$before" "$after" -compose src -highlight-color white -lowlight-color black miff:- 2>/dev/null |
        magick - -colorspace gray -threshold 50% -format '%[fx:round(mean*w*h)] %[fx:w*h]\n' info:
    )
    awk -v p="$pixels" -v t="$total" 'BEGIN { printf "%d px differ (%.4f%%)\n", p, 100 * p / t }'
    ;;
  *) echo "usage: compare.sh montage|diff ..." >&2; exit 2 ;;
esac
