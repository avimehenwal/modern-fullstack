# WS

## Creation

```sh
# create workspace root
npm init --yes

# create new projects inside worspaces
npm init --yes --workspace ./package/one
npm init --yes --workspace ./package/two
```

## Management

```sh
npm install abbrev --workspace one
npm run test --workspace=two

# run command on all workspaces
npm run test --workspaces --if-present
```

> pnpm uses --filter instead of workspaces