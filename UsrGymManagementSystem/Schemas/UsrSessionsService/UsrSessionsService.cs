

namespace Terrasoft.Configuration
{
    using System.ServiceModel;
    using System.ServiceModel.Web;
    using System.ServiceModel.Activation;
    using Terrasoft.Core.DB;
    using Terrasoft.Web.Common;
    using System;
    using System.Web.SessionState;
    [ServiceContract]
    [AspNetCompatibilityRequirements(RequirementsMode = AspNetCompatibilityRequirementsMode.Required)]
    public class UsrSessionsService : BaseService, IReadOnlySessionState
    {
        [OperationContract]
[WebInvoke(Method = "POST", BodyStyle = WebMessageBodyStyle.Wrapped,
            RequestFormat = WebMessageFormat.Json, ResponseFormat = WebMessageFormat.Json)]
public decimal GetMaxPriceByDriveTypeId(string driveTypeId)
        {
            if (string.IsNullOrEmpty(driveTypeId))
            {
                return -1;
            }
            Select select = new Select(UserConnection)
                .Column(Func.Max("UsrPrice"))
                .From("UsrYachts")
                .Where("UsrDriveTypeId").IsEqual(Column.Parameter(new Guid(driveTypeId)))
                .And("UsrStatusId").IsEqual(Column.Parameter(new Guid("49715cdd-ca8f-4c69-be62-f7f4d017e894"))) // 1. Operational
                as Select;
            decimal result = select.ExecuteScalar<decimal>();
            return result;
        }
[OperationContract]
        [WebInvoke(Method = "GET", BodyStyle = WebMessageBodyStyle.Wrapped,
            RequestFormat = WebMessageFormat.Json, ResponseFormat = WebMessageFormat.Json)]
        public string GetExample()
        {
            return "OK!";
        }

    }
}
