// Core Engine
const AffiliateEngine = require("./core/AffiliateEngine");
const CommissionEngine = require("./core/CommissionEngine");
const ReferralEngine = require("./core/ReferralEngine");
const PaymentEngine = require("./core/PaymentEngine");

// Affiliate Management
const AffiliateManager = require("./affiliate/AffiliateManager");
const AffiliateService = require("./affiliate/AffiliateService");
const AffiliateValidator = require("./affiliate/AffiliateValidator");
const AffiliateOnboarding = require("./affiliate/AffiliateOnboarding");

// Commission Management
const CommissionCalculator = require("./commission/CommissionCalculator");
const CommissionTracker = require("./commission/CommissionTracker");
const CommissionValidator = require("./commission/CommissionValidator");
const CommissionHistory = require("./commission/CommissionHistory");

// Referral Management
const ReferralTracker = require("./referral/ReferralTracker");
const ReferralValidator = require("./referral/ReferralValidator");
const ReferralAttribution = require("./referral/ReferralAttribution");
const ReferralAnalytics = require("./referral/ReferralAnalytics");

// Payment Management
const PaymentProcessor = require("./payment/PaymentProcessor");
const PaymentScheduler = require("./payment/PaymentScheduler");
const PaymentValidator = require("./payment/PaymentValidator");
const PaymentHistory = require("./payment/PaymentHistory");

// Analytics
const AffiliateAnalytics = require("./analytics/AffiliateAnalytics");
const PerformanceTracker = require("./analytics/PerformanceTracker");
const ReportGenerator = require("./analytics/ReportGenerator");
const DashboardBuilder = require("./analytics/DashboardBuilder");

// Fraud Detection
const FraudDetector = require("./fraud/FraudDetector");
const FraudAnalyzer = require("./fraud/FraudAnalyzer");
const FraudPrevention = require("./fraud/FraudPrevention");
const FraudReporting = require("./fraud/FraudReporting");

// Campaign Management
const CampaignManager = require("./campaign/CampaignManager");
const CampaignTracker = require("./campaign/CampaignTracker");
const CampaignOptimizer = require("./campaign/CampaignOptimizer");
const CampaignAnalytics = require("./campaign/CampaignAnalytics");

// Rewards System
const RewardSystem = require("./rewards/RewardSystem");
const IncentiveManager = require("./rewards/IncentiveManager");
const BonusCalculator = require("./rewards/BonusCalculator");
const RewardTracker = require("./rewards/RewardTracker");

// Compliance
const ComplianceChecker = require("./compliance/ComplianceChecker");
const RegulatoryManager = require("./compliance/RegulatoryManager");
const AuditTrail = require("./compliance/AuditTrail");
const ComplianceReporting = require("./compliance/ComplianceReporting");

// API
const AffiliateAPI = require("./api/AffiliateAPI");
const CommissionAPI = require("./api/CommissionAPI");
const ReferralAPI = require("./api/ReferralAPI");
const PaymentAPI = require("./api/PaymentAPI");

// Utilities
const AffiliateUtils = require("./utils/AffiliateUtils");
const CommissionUtils = require("./utils/CommissionUtils");
const ReferralUtils = require("./utils/ReferralUtils");
const PaymentUtils = require("./utils/PaymentUtils");

// Types
const AffiliateTypes = require("./types/AffiliateTypes");
const CommissionTypes = require("./types/CommissionTypes");
const ReferralTypes = require("./types/ReferralTypes");
const PaymentTypes = require("./types/PaymentTypes");

// Errors
const AffiliateError = require("./errors/AffiliateError");
const CommissionError = require("./errors/CommissionError");
const ReferralError = require("./errors/ReferralError");
const PaymentError = require("./errors/PaymentError");

// Version
const version = "1.0.1";

module.exports = {
  // Core Engine
  AffiliateEngine,
  CommissionEngine,
  ReferralEngine,
  PaymentEngine,

  // Affiliate Management
  AffiliateManager,
  AffiliateService,
  AffiliateValidator,
  AffiliateOnboarding,

  // Commission Management
  CommissionCalculator,
  CommissionTracker,
  CommissionValidator,
  CommissionHistory,

  // Referral Management
  ReferralTracker,
  ReferralValidator,
  ReferralAttribution,
  ReferralAnalytics,

  // Payment Management
  PaymentProcessor,
  PaymentScheduler,
  PaymentValidator,
  PaymentHistory,

  // Analytics
  AffiliateAnalytics,
  PerformanceTracker,
  ReportGenerator,
  DashboardBuilder,

  // Fraud Detection
  FraudDetector,
  FraudAnalyzer,
  FraudPrevention,
  FraudReporting,

  // Campaign Management
  CampaignManager,
  CampaignTracker,
  CampaignOptimizer,
  CampaignAnalytics,

  // Rewards System
  RewardSystem,
  IncentiveManager,
  BonusCalculator,
  RewardTracker,

  // Compliance
  ComplianceChecker,
  RegulatoryManager,
  AuditTrail,
  ComplianceReporting,

  // API
  AffiliateAPI,
  CommissionAPI,
  ReferralAPI,
  PaymentAPI,

  // Utilities
  AffiliateUtils,
  CommissionUtils,
  ReferralUtils,
  PaymentUtils,

  // Types
  AffiliateTypes,
  CommissionTypes,
  ReferralTypes,
  PaymentTypes,

  // Errors
  AffiliateError,
  CommissionError,
  ReferralError,
  PaymentError,

  // Version
  version,
};
