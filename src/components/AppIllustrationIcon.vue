<template lang="pug">
    div#illustration
        icon-background
        div.icon_ubuntu
          icon-ubuntu
        div.icon_docker
          icon-docker
        div.icon_laravel
          icon-laravel
        div.icon_github
          icon-github
        div.icon_bitbucket
          icon-bitbucket
        div.icon_git
          icon-git
        div.icon_vim
          icon-vim
        div.icon_git2
          icon-git2
        div.computer_wrap
          icon-computer
</template>

<script>
import IconBackground from './icons/IconBackground.vue'
import IconComputer from './icons/IconComputer.vue'
import IconLaravel from './icons/IconLaravel.vue'
import IconDocker from './icons/IconDocker.vue'
import IconVim from './icons/IconVim.vue'
import IconBitbucket from './icons/IconBitbucket.vue'
import IconUbuntu from './icons/IconUbuntu.vue'
import IconGithub from './icons/IconGithub.vue'
import IconGit from './icons/IconGit.vue'
import IconGit2 from './icons/IconGit2.vue'

export default {
  components: {
    IconLaravel,
    IconDocker,
    IconVim,
    IconBitbucket,
    IconUbuntu,
    IconGithub,
    IconGit,
    IconGit2,
    IconBackground,
    IconComputer
  }
}
</script>
