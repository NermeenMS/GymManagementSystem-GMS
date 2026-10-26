namespace Terrasoft.Configuration
{
    using System;
    using System.Collections.Generic;
    using System.Data;
    using System.Linq;
    using System.ServiceModel;
    using System.ServiceModel.Activation;
    using System.ServiceModel.Web;
    using System.Web.SessionState;
    using Terrasoft.Common;
    using Terrasoft.Core.DB;
    using Terrasoft.Web.Common;
    [ServiceContract]
    [AspNetCompatibilityRequirements(RequirementsMode = AspNetCompatibilityRequirementsMode.Required)]
    public class UsrSessionService : BaseService, IReadOnlySessionState
    {
        [OperationContract]
        [WebInvoke(Method = "POST", BodyStyle = WebMessageBodyStyle.Wrapped,
            RequestFormat = WebMessageFormat.Json, ResponseFormat = WebMessageFormat.Json)]
        public List<ProgramPriceDto> GetSessionTotalPriceByCode()
        {
			 var returnList = new List<ProgramPriceDto>();
            var select = (Select)new Select(UserConnection)
            // 1. Select the Program Code to group by
            .Column("UsrWorkoutPrograms", "UsrCode")

            // 2. Sum the price, and use Coalesce to return -1 if the sum is NULL (no sessions or null prices)
            .Column(Func.Coalesce(
                Func.Sum("UsrWorkoutSessions", "UsrPrice"),
                Column.Parameter(-1m) // 'm' ensures it's treated as a decimal to match the Sum return type
            )).As("TotalPrice")

            // 3. Start FROM the parent table
            .From("UsrWorkoutPrograms")

            // 4. LEFT JOIN the child table (ensures parent is returned even if no children exist)
            .LeftOuterJoin("UsrWorkoutSessions")
        .On("UsrWorkoutSessions", "UsrSessionsParentWorkOutProgramsId")
        .IsEqual("UsrWorkoutPrograms", "Id")

        // Optional: If you need to filter by status, put it in the ON clause 
        // so it doesn't accidentally turn the Left Join into an Inner Join
        .And("UsrWorkoutSessions", "UsrSessionsStatusId")
        .IsEqual(Column.Parameter(new Guid("3B287E23-8ED6-4FD6-BF62-C6367E438CF9")))

    // 5. (Optional) Filter by a specific program if needed. 
    // If 'workoutPCode' is actually the Program's ID, use "Id". If it's the string Code, use "Code".
    // .Where("UsrWorkoutPrograms", "Id").IsEqual(Column.Parameter(workoutProgramId))
    // 6. Group by the Program Code
    .GroupBy("UsrWorkoutPrograms", "UsrCode");

            string resultCode = string.Empty;
            using (var dbExecutor = UserConnection.EnsureDBConnection())
            {
                using (var reader = select.ExecuteReader(dbExecutor))
                {
                    if (reader.Read())
                    {
                        // Func.Coalesce guarantees this will never be DBNull

						 returnList.Add(new ProgramPriceDto
                        {
                            Code = reader.GetColumnValue<string>("UsrCode"),
                            TotalPrice = reader.GetColumnValue<decimal>("TotalPrice")
                        });                       
                    }
                }
            }
            return returnList;
        }

        [OperationContract]
        [WebInvoke(Method = "GET", BodyStyle = WebMessageBodyStyle.Wrapped,
            RequestFormat = WebMessageFormat.Json, ResponseFormat = WebMessageFormat.Json)]
        public string GetExample()
        {
            return "OK!";
        }
    }
	       public class ProgramPriceDto
    {
        public string Code { get; set; }
        public decimal TotalPrice { get; set; }
    }
}
