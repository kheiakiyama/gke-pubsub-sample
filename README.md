## Set Up

### Mac
```
brew install kustomize
```

## Deployment
### Staging
```
kubectl create secret generic subscriber-key --from-file=key.json=<PATH-TO-KEY-FILE>.json
kubectl create secret generic scheduled-job-key --from-file=key.json=<PATH-TO-KEY-FILE>.json

kustomize build ./kustomization/overlays/staging | kubectl apply -f -
```

### Production
```
kustomize build ./kustomization/overlays/production | kubectl apply -f -
```

## Debug
### Confirm inside nodes
```
kubectl run -it --rm --restart=Never busybox --image=busybox sh
```

### Check logs
