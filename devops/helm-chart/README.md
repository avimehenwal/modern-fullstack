# Helm Chart

```sh
minikube start
minikube status

helm repo add bitnami https://charts.bitnami.com/bitnami
helm repo list

helm install redis bitnami/redis --set serviceType=NodePort
heml ls

kubectl create deployment nestjs-deployment --image=nest-cloud-run --port 3000 --dry-run=client -o yaml > deployment.yaml
```

## Manifesting

```sh
helm install nestjs-bull-chart .
```