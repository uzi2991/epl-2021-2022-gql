# EPL Season 2021-2022 GraphQL

## Example Query

```graphql
query {
  round(roundNumber: 38) {
    standings {
      position
      team
      points
      goalDiff
    }
  }
}
```
