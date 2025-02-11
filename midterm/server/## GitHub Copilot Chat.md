## GitHub Copilot Chat

- Extension Version: 0.23.2 (prod)
- VS Code: vscode/1.96.4
- OS: Windows

## Network

User Settings:
```json
  "github.copilot.advanced.debug.useElectronFetcher": true,
  "github.copilot.advanced.debug.useNodeFetcher": false,
  "github.copilot.advanced.debug.useNodeFetchFetcher": true
```

Connecting to https://api.github.com:
- DNS ipv4 Lookup: 140.82.112.5 (45 ms)
- DNS ipv6 Lookup: Error (21 ms): getaddrinfo ENOTFOUND api.github.com
- Proxy URL: None (1 ms)
- Electron fetch (configured): HTTP 200 (193 ms)
- Node.js https: HTTP 200 (169 ms)
- Node.js fetch: HTTP 200 (151 ms)
- Helix fetch: HTTP 200 (198 ms)

Connecting to https://api.githubcopilot.com/_ping:
- DNS ipv4 Lookup: 140.82.114.21 (58 ms)
- DNS ipv6 Lookup: Error (39 ms): getaddrinfo ENOTFOUND api.githubcopilot.com
- Proxy URL: None (2 ms)
- Electron fetch (configured): HTTP 200 (175 ms)
- Node.js https: HTTP 200 (159 ms)
- Node.js fetch: HTTP 200 (162 ms)
- Helix fetch: HTTP 200 (156 ms)

## Documentation

In corporate networks: [Troubleshooting firewall settings for GitHub Copilot](https://docs.github.com/en/copilot/troubleshooting-github-copilot/troubleshooting-firewall-settings-for-github-copilot).