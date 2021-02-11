const
  Queue               = require('.'),
  LocatorConstituent  = require('superhero/core/locator/constituent')

/**
 * @memberof Eventsource.Domain
 * @extends {superhero/core/locator/constituent}
 */
class QueueLocator extends LocatorConstituent
{
  /**
   * @returns {Queue}
   */
  locate()
  {
    const
      redis   = this.locator.locate('infrastructure/redis'),
      console = this.locator.locate('core/console')

    return new Queue(redis, console)
  }
}

module.exports = QueueLocator