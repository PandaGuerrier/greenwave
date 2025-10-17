import { BaseSeeder } from '@adonisjs/lucid/seeders'
import WebsiteSetting from '#home/models/website_setting'

export default class ProductSeeder extends BaseSeeder {
  async run() {
    await WebsiteSetting.create({
      name: 'GreenWave',
      description:
        'GreenWave Technologies leverages innovation for sustainability. We integrate Green IT into every solution, delivering cutting-edge services while radically reducing our environmental footprint. We aim to lead the industry toward a greener future.',
      seo: 'GreenWave, ecologie',
    })
  }
}
