import { MiddlewareRoute } from "../../../loaders/helpers/routing/types"
import { validateAndTransformBody } from "../../utils/validate-body"
import { validateAndTransformQuery } from "../../utils/validate-query"
import * as QueryConfig from "./query-config"
import {
  AdminCreatePricingRuleType,
  AdminGetPricingRuleTypeParams,
  AdminGetPricingRuleTypesParams,
  AdminUpdatePricingRuleType,
} from "./validators"

export const adminPricingRoutesMiddlewares: MiddlewareRoute[] = [
  {
    method: ["GET"],
    matcher: "/admin/pricing/rule-types",
    middlewares: [
      validateAndTransformQuery(
        AdminGetPricingRuleTypesParams,
        QueryConfig.listTransformQueryConfig
      ),
    ],
  },
  {
    method: ["POST"],
    matcher: "/admin/pricing/rule-types",
    middlewares: [
      validateAndTransformBody(AdminCreatePricingRuleType),
      validateAndTransformQuery(
        AdminGetPricingRuleTypeParams,
        QueryConfig.retrieveTransformQueryConfig
      ),
    ],
  },
  {
    method: ["GET"],
    matcher: "/admin/pricing/rule-types/:id",
    middlewares: [
      validateAndTransformQuery(
        AdminGetPricingRuleTypeParams,
        QueryConfig.retrieveTransformQueryConfig
      ),
    ],
  },
  {
    method: ["POST"],
    matcher: "/admin/pricing/rule-types/:id",
    middlewares: [
      validateAndTransformBody(AdminUpdatePricingRuleType),
      validateAndTransformQuery(
        AdminGetPricingRuleTypeParams,
        QueryConfig.retrieveTransformQueryConfig
      ),
    ],
  },
  {
    method: ["DELETE"],
    matcher: "/admin/pricing/rule-types/:id",
    middlewares: [],
  },
]
