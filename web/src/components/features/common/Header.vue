<template>
  <header class="p-header">
    <div class="p-header__container">
      <router-link to="/" class="p-header__logo"><img src="img/logo.svg" alt="" /></router-link>
      <nav>
        <ul class="p-header__items-list js-navigation">
          <li class="p-header__items-list__text01"><router-link to="/">POSSEとは</router-link></li>
          <li class="p-header__items-list__text02"><router-link to="/quiz">クイズ</router-link></li>
          <li class="p-header__items-list__sns">
            <a href="#"><img src="img/icon/icon-twitter.svg" alt="" /></a>
          </li>
          <li class="p-header__items-list__sns">
            <a href="#"><img src="img/icon/icon-instagram.svg" alt="" /></a>
          </li>
          <ul class="p-header__items-list-mobile">
            <li class="p-header__items-list-mobile__line-add">
              <div class="p-header__items-list-mobile__line-add__container">
                <div class="p-header__items-list-mobile__line-add__image01"><img src="img/icon/icon-line.svg" alt="" /></div>
                <span>POSSE公式LINE追加</span>
                <div class="p-header__items-list-mobile__line-add__image02"><img src="img/icon/icon-link-light.svg" alt="" /></div>
              </div>
            </li>
            <li>POSSE公式サイト<img src="img/icon/icon-link-gray-dark.svg" alt="" /></li>
            <li>
              <a href="#"><img src="img/icon/icon-twitter.svg" alt="" /></a>
              <a href="#"><img src="img/icon/icon-instagram.svg" alt="" /></a>
            </li>
          </ul>
        </ul>
      </nav>
      <div class="p-header__hamburger js-hamburger">
        <span></span>
      </div>
    </div>
  </header>
</template>
