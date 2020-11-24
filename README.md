# Requisitos

- python 3
- django
- django rest framework
- npm
- nodejs

# Instalação Backend

primeiro clone o projeto:

```
git clone https://github.com/ArondevIta/challenge.git
```

após clonar o projeto vamos precisar entrar no backend para instalar a virtualenv :

```
cd backend
virtualenv venv
```

após criar a virtualenv vamos ativa-lá:

##### windows:

```
venv\Scripts\activate
```

##### linux:

```
source venv/bin/activate
```

com a virtualenv ativa agora vamos instalar os requisitos do backend:

```
pip install -r requirements.txt
```

este comando irá instalar os requisitos necéssarios para rodar o projeto.

Após instalar os requirements.txt iremos rodar as migrations para criar a base de dados, rode o seguinte comando:

```
python manage.py makemigrations
```

e agora

```
python manage.py migrate
```

agora vamos iniciar o backend:

```
python manage.py runserver
```

# Instalação Frontend

Abra outro terminal e deixe o backend rodando no primeiro.

Apó abrir o terminal, entra na pasta do projeto e entre na pasta chamada frontend:

```
cd frontend
```

#### instalação requisitos

rode o seguinte comando:

```
npm install
```

este comando vai instalar as dependências necessárias do frontend.

após finalização da instalação, rode o seguinte comando:

```
npm start
```

após isso basta esperar que o programa irá abrir sozinho, ou assim que terminar acesse pelo navegador http://localhost:3000
