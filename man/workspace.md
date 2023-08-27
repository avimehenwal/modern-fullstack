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

## MS

An API gateway sits between external consumers and your microservices, providing a **unified entry point**. You can use it not just for

1. Routing
2. Rate limiting
3. Access quota management
4. Caching
5. Security
6. Logging, Monitoring, Tracing, Analystics and Billing
7. Authentication and Securoty Policy enforcements
8. Load Balancing and circuit breaking
9. Protocol Translations and service discovery