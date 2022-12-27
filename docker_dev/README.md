## Quick start

- First time building up

  - MacOS M1 users

    1. Build up django service
       1. get into docker_dev directory
       2. run
       ```shell
       docker-compose up --build -d
       ```
       3. done
    2. Build up databases
       1. get into cityscope-mysql container via
       ```shell
       docker exec -it sport-social-mysql bash
       ```
       2. run
       ```shell
       bash /utils/bin/mysql_setup.sh
       ```
       3. done

  - Windows users
    1. Build up django service
       1. get into docker_dev directory
       2. run
       ```shell
       docker-compose up --build -d
       ```
       3. done
    2. Build up websocket service
       1. get into cityscope-mysql container via
       ```shell
       docker exec -it sport-social-mysql bash
       ```
       2. run
       ```shell
       bash /utils/bin/mysql_setup.sh
       ```
       3. enter the password
       ```shell
       csl92021164
       ```
       4. done

- Restart docker container(django)
  1. run `docker-compose up -d`
  2. run `django_run.sh`
  3. done
