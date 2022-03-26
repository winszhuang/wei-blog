<script lang="ts" setup>
const fakeList = [
  {
    id: 'huhhjilhi',
    title: '元宇宙虛擬土地怎麼買？區塊鏈虛擬土地購買全攻略',
    content: '說在前頭 首先還是要說，目前元宇宙平台還在超級早期的階段，有點像當年網路相簿剛出來，又或者像社群服務剛爆發，請先回想一下當年的網路歷史，現在要進元宇宙買塊地，沒有人能跟你說哪個平台才會是對的',
    category: 'meta',
    tags: ['blockchain', 'meta'],
    createTime: '20220326',
    imageUrl: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
  },
  {
    id: 'rhuhhuih',
    title: 'NFT 之夏 — NFT怎麼買？加密藝術是什麼？給所有人的 NFT 終極入門懶人包（2021 版）',
    content: 'NFT 自從今年 1 月份起飛，Beeple 爆紅，沉寂一陣後，當前真的迎來了我在 臉書 和 Podcast 節目《寶博朋友說》裡不斷預告的 NFT 之夏，許多 NFT 的交易都突破新高： 朋友的 NFT 也屢屢賣到高價，半年回報率都在',
    category: 'nft',
    tags: ['nft', 'meta'],
    createTime: '20220322',
    imageUrl: 'https://images.unsplash.com/photo-1504639725590-34d0984388bd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80'

  },
  {
    id: 'opjojih',
    title: '初見真相，亦窺見未來 —為「 劍橋分析事件」吹哨者：克里斯多福．懷利（Christopher Wylie）新書《Mindf*ck 心智操控》推薦序',
    content: '“這是我最後一篇發表在 Medium 的華語文章。不是承諾，更談不上宣言，純粹就是這樣打算而已。” — Kin Ko',
    category: '閱讀',
    tags: ['read'],
    createTime: '20210921',
    imageUrl: 'https://images.unsplash.com/photo-1504610926078-a1611febcad3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80'
  },
]
</script>

<template>
  <div class="p-5">
    <Article
      v-for="item in fakeList"
      :key="item.id"
      :category="item.category"
      :content="item.content"
      :create-time="item.createTime"
      :tags="item.tags"
      :title="item.title"
      :image-url="item.imageUrl"
      class=" mb-14"
    />
  </div>
  <Pagination />
</template>