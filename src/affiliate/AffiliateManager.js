const EventEmitter = require("events");
const { v4: uuidv4 } = require("uuid");

class AffiliateManager extends EventEmitter {
  constructor(config = {}) {
    super();
    this.config = config;
    this.affiliates = new Map();
    this.isInitialized = false;
  }

  async initialize() {
    this.isInitialized = true;
    this.emit("initialized", { timestamp: new Date() });
  }

  async createAffiliate(affiliateData) {
    const affiliate = {
      id: uuidv4(),
      ...affiliateData,
      createdAt: new Date(),
      status: "active",
    };

    this.affiliates.set(affiliate.id, affiliate);
    this.emit("affiliateCreated", affiliate);

    return affiliate;
  }

  async getAffiliate(affiliateId) {
    const affiliate = this.affiliates.get(affiliateId);
    if (!affiliate) {
      throw new Error("Affiliate not found");
    }
    return affiliate;
  }

  async updateAffiliate(affiliateId, updateData) {
    const affiliate = this.affiliates.get(affiliateId);
    if (!affiliate) throw new Error("Affiliate not found");

    Object.assign(affiliate, updateData, { updatedAt: new Date() });
    this.affiliates.set(affiliateId, affiliate);

    return affiliate;
  }

  async deleteAffiliate(affiliateId) {
    const deleted = this.affiliates.delete(affiliateId);
    if (!deleted) throw new Error("Affiliate not found");

    return { success: true };
  }

  async listAffiliates(options = {}) {
    return Array.from(this.affiliates.values());
  }

  async shutdown() {
    this.affiliates.clear();
    this.emit("shutdown", { timestamp: new Date() });
  }
}

module.exports = AffiliateManager;
