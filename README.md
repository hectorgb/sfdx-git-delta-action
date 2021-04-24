# Salesforce SFDX Git Delta Action

This action allows to use the Salesforce SFDX Git Delta Action from GitHub Actions


## Example usage

```yaml
name: SFDX Delta Creation

on: [push]

jobs:
  test:
  
    runs-on: ubuntu-latest
    
    steps:
      - uses: hectorgb/sfdx-git-delta-action@v1
      - name: sfdx-delta-creation
        run: sgd --to HEAD --from HEAD^ --repo . --output .
```
