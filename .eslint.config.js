module.exports = {
  "root": true, // 作用于当前目录及其子目录
  "overrides": [
    {
      "files": ["*.rs"],
      "plugins": ["./lib"],
      "rules": {
        "rust/rust-lint": "error"
      }
    }
  ],
  "rules": {
    "rust/rust-lint": "error"
  }
}
