## Set Up

### Mac
```
brew install kustomize
```

## Deployment
### Staging
```
kubectl create secret generic subscriber-key--from-file=key.json=<PATH-TO-KEY-FILE>.json

kustomize build ./kustomization/overlays/staging | kubectl apply -f -
```

### Production
```
kustomize build ./kustomization/overlays/production | kubectl apply -f -
```
