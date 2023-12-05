# Changelog

## v0.3.0

- Made the regular text color brighter

## v0.2.0

- Fixed colors that were too reddish and not saturated enough
  - This involved switching from LCH colors to hand-picked HSL colors
  - OKLCH would be better about not skewing the hues than LCH, but colord only
    has support for LCH anyway
  - A few colors I don't care about as deeply were left as LCH for ease of
    development

## v0.1.0

- Initial release
