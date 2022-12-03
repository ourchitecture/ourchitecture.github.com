# Ourchitecture.io Website

## Developer Notes

### Getting Started

With GNU `make` installed, simply run `make all` to install dependencies, build, test and package the project. Run `make dev` to start a local instance of the website in developer watch mode and make any necessary edits.

To run `ionic` or `ng` commands, it is not necessary or even recommended to install the tools globally. Instead run `yarn ionic ...` or `yarn ng ...` to run the locally versioned tools.

To update `npm` dependencies, use `yarn add ...` or `yarn remove ...` as well as `yarn install` to update the "./yarn.lock" file. For developer depencies, remember to use the `-D` option.

## Administrative

- [Get YouTube video thumbnails](https://www.get-youtube-thumbnail.com/)
- Generate thumbnail image names from titles: `"Author: Title".toLocaleLowerCase().replace(/[:]\s/g, '_').replace(/\s/g, '-').replace(/[-]+/g, '-') + ".jpg"`
