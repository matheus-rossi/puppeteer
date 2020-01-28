const puppeteer = require('puppeteer')

puppeteer.launch({ 
    headless:false,
    args: ['--start-maximized']
  }).then( async browser => {  
    const page = await browser.newPage()
    await page.goto('https://example.com')
    await page.screenshot({path: 'example.png'})
    await browser.close()
  })
