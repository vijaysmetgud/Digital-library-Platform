resource "kubernetes_namespace" "dev" {
  metadata { name = "dev" }
}
resource "kubernetes_namespace" "staging" {
  metadata { name = "staging" }
}
resource "kubernetes_namespace" "prod" {
  metadata { name = "prod" }
}
