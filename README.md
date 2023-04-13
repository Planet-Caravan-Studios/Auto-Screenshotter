# README

## Command Syntax:
- `node screenshot.js https://test.com fileName delay`

## Usage Notes:
- https://test.com should be replaced with your target site.
- 'fileName' should be replaced with your desired file name.  The '.png' extension will be added automatically.  The app will throw an error if you're missing the fileName option.  Files with the same name are automatically overwritten with no warning.

---

## In-Progress - Not Ready For Use

## To Do:
- Progress bar: https://www.npmjs.com/package/cli-progress
- Commander.JS Interface: https://www.npmjs.com/package/commander
- Prompts: https://www.npmjs.com/package/prompts

## Commands
- `npm run screenshot`
- `npm run screenshot-prompt`
- `npm run screenshot-batch`
- `npm run screenshot-devices`

## Command Arguments
- `--devices=all/mobile/desktop`
- `--format=all/png/pdf`