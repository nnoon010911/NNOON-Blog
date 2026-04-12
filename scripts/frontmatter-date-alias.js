/* global hexo */

'use strict'

hexo.extend.filter.register('before_generate', () => {
  const Post = hexo.model('Post')

  if (!Post) return

  const updates = []

  Post.find({}).forEach(post => {
    const patch = {}

    // 兼容自定义 Front Matter 字段名，统一映射到主题使用的标准字段。
    if (post['date created']) {
      patch.date = post['date created']
    }

    if (post.modify) {
      patch.updated = post.modify
    }

    if (Object.keys(patch).length > 0) {
      updates.push(post.update(patch))
    }
  })

  return Promise.all(updates)
})
