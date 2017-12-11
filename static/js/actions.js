const Actions = (function () {
  const CONFIG_KEY = 'CONFIG'

  function save (value, callback) {
    if (!value) return alert('错误：没有指定值')
    chrome.storage.local.set({ [CONFIG_KEY]: JSON.stringify(value) }, () => {
      alert('设置已保存')
      callback && callback()
    })
  }

  function load (callback) {
    chrome.storage.local.get(CONFIG_KEY, data => {
      callback(JSON.parse(data[CONFIG_KEY] || '[]'))
    })
  }

  function reload (data) {
    save(data, () => {
      chrome.runtime.reload()
    })
  }

  return {
    save,
    load,
    reload
  }
})();
