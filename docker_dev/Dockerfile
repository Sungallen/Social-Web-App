FROM python:3.8.10

# create directory for authorisation
COPY ./web_utils /utils

# authorise permission to scripts under /utils/bin directory
RUN chmod u+x /utils/bin/*.sh

# install python packages
RUN ["/bin/bash", "/utils/bin/get_dependencies.sh"]

WORKDIR /code 

RUN echo ". /utils/bashrc" >> /root/.bashrc
ENTRYPOINT ["/bin/bash"]