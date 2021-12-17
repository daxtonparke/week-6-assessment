
import { Builder, Capabilities, By } from "selenium-webdriver"

require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeEach(async () => {
    driver.get('http://localhost:3000/')
})

afterAll(async () => {
    driver.quit()
})

test('Title shows up when page loads', async () => {
    const title = await driver.findElement(By.id('title'))
    const displayed = await title.isDisplayed()
    expect(displayed).toBe(true)
})

test('should check that clicking draw button displays choices', async()=>{
    await driver.findElement(By.id('draw')).click()
    let robotDiv = driver.findElement(By.id('choices'))
    const displayed = await robotDiv.isDisplayed()
    expect(displayed).toBe(true)
})

test('add to duo displays player id', async()=>{
    await driver.findElement(By.id('draw')).click()
    await driver.findElement(By.id('')).click()
})
