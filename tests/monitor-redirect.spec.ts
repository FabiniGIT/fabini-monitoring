import { test, expect } from '@playwright/test'

test(`checkout redirect CZ`, async ({page}) => {
    const targetUrl = "https://www.fabini.cz/"
    await page.goto("https://www.fabini.cz/")
    
    await page.locator("button.needsclick.klaviyo-close-form").click()
    await page.getByRole("button", {name: "Odmítnout"}).click()

    const section = page.locator(".resource-list").first()
    await section.locator("button.quick-add__button").nth(0).click() 

    await page.getByRole("link", {name: "Přejít do košíku"}).click()

    await page.getByRole("link", {name: "Zaplatit"}).click()

    await expect(page).toHaveURL(/https:\/\/www\.fabini\.cz\/checkouts\/./gm)


})
test(`checkout redirect SK`, async ({page}) => {
    const targetUrl = "https://www.fabini.sk/"
    await page.goto("https://www.fabini.sk/")
    
    await page.locator("button.needsclick.klaviyo-close-form").click()
    await page.getByRole("button", {name: "Odmietnuť"}).click()

    const section = page.locator(".resource-list").first()
    await section.locator("button.quick-add__button").nth(0).click() 

    await page.getByRole("link", {name: "Prejsť do košíka"}).click()

    await page.getByRole("link", {name: "Platba"}).first().click()

    await expect(page).toHaveURL(/https:\/\/fabini\.sk\/checkouts\/./gm)

})

test(`checkout redirect HU`, async ({page}) => {
    const targetUrl = "https://www.fabini.hu/"
    await page.goto("https://www.fabini.hu/")
    
    await page.locator("button.needsclick.klaviyo-close-form").click()
    await page.getByRole("button", {name: "Elutasítás"}).click()

    const section = page.locator(".resource-list").first()
    await section.locator("button.quick-add__button").nth(0).click() 

    await page.getByRole("link", {name: "Ugrás a kosárhoz"}).first().click()

    await page.getByRole("link", {name: "Fizetés"}).first().click()

    await expect(page).toHaveURL(/https:\/\/fabini\.hu\/checkouts\/./gm)


})

test(`checkout redirect PL`, async ({page}) => {
    const targetUrl = "https://www.fabininaczynia.pl/"
    await page.goto("https://www.fabininaczynia.pl/")
    
    await page.locator(".header-collections-bar__link").first().click()

    await page.locator("button.quick-add__button").first().click() 

    await page.getByRole("link", {name: "Przejdź do koszyka"}).click()

    await page.getByRole("link", {name: "Zrealizuj zakup"}).click()

    await expect(page).toHaveURL(/https:\/\/fabininaczynia\.pl\/checkouts\/./gm)


})
