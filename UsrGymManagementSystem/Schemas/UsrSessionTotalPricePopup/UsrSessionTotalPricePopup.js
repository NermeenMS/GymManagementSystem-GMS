define("UsrSessionTotalPricePopup", /**SCHEMA_DEPS*/[]/**SCHEMA_DEPS*/, function/**SCHEMA_ARGS*/()/**SCHEMA_ARGS*/ {
	return {
		viewConfigDiff: /**SCHEMA_VIEW_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"name": "TopAreaProfileContainer",
				"values": {
					"visible": true,
					"alignItems": "stretch"
				}
			},
			{
				"operation": "insert",
				"name": "TotalPriceDataGrid",
				"values": {
					"type": "crt.DataGrid",
					"items": "$SessionPricesList",
					"primaryColumnName": "RowId",
					"columns": [
						{
							"id": "col-code",
							"code": "Code",
							"caption": "Program Code",
							"dataValueType": 1
						},
						{
							"id": "col-price",
							"code": "TotalPrice",
							"caption": "Total Price",
							"dataValueType": 5
						}
					]
				},
				"index": 1
			}
		]/**SCHEMA_VIEW_CONFIG_DIFF*/,
		viewModelConfigDiff: /**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"path": [
					"attributes"
				],
				"values": {
					"SessionPricesList": {
						"isCollection": true
					}
				}
			}
		]/**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/,
		modelConfigDiff: /**SCHEMA_MODEL_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"path": [],
				"values": {
					"dataSources": {}
				}
			}
		]/**SCHEMA_MODEL_CONFIG_DIFF*/,
		handlers: /**SCHEMA_HANDLERS*/[
			{
				request: "crt.HandleViewModelInitRequest",
				handler: async (request, next) => {
					try {
						// TODO: Replace 'UsrSessionPriceService' with your actual C# Service class name
						debugger;
						const response = await fetch('/0/ServiceModel/UsrSessionService.svc/GetSessionTotalPriceByCode', {
							method: 'POST',
							headers: {
								'Content-Type': 'application/json'
							},
							credentials: 'include' // Ensures authentication cookies are sent
						});
						
						if (response.ok) {
							const result = await response.json();
							// Creatio services often wrap the return array in a 'd' property. This handles both.
							const dataList = result.d || result; 
							
							// Map data to include a unique RowId (required by Freedom UI DataGrid)
							const mappedData = dataList.map((item, index) => ({
								RowId: index,
								Code: item.Code,
								TotalPrice: item.TotalPrice
							}));

							// Assign to the collection attribute to populate the grid
							request.$context.SessionPricesList = mappedData;
						}
					} catch (error) {
						console.error("Failed to load session prices:", error);
						await request.$context.executeRequest({
							type: "crt.NotificationRequest",
							message: "An error occurred while loading the total prices."
						});
					}
					
					return next?.handle(request);
				}
			}
		]/**SCHEMA_HANDLERS*/,
		converters: /**SCHEMA_CONVERTERS*/{}/**SCHEMA_CONVERTERS*/,
		validators: /**SCHEMA_VALIDATORS*/{}/**SCHEMA_VALIDATORS*/
	};
});