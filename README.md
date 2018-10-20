## Set Up

### Mac
```
brew install kustomize
```

## Deployment
### Staging
```
kustomize build ./kustomization/overlays/staging | kubectl apply -f -
```

### Production
```
kustomize build ./kustomization/overlays/production | kubectl apply -f -
```
