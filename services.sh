# Habilita o Google Cloud Run, que permite executar contêineres em um ambiente gerenciado.
gcloud services enable run.googleapis.com
# Ativa o Google Cloud Build, que permite compilar, testar e implantar código em ambientes de nuvem.
gcloud services enable cloudbuild.googleapis.com
# Habilita o Google Artifact Registry, que é usado para armazenar e gerenciar artefatos de software, como imagens de contêiner e pacotes.
gcloud services enable artifactregistry.googleapis.com