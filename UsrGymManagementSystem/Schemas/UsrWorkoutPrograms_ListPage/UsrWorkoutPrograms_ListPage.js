define("UsrWorkoutPrograms_ListPage", /**SCHEMA_DEPS*/["@creatio-devkit/common"]/**SCHEMA_DEPS*/, function/**SCHEMA_ARGS*/(sdk)/**SCHEMA_ARGS*/ {
	return {
		viewConfigDiff: /**SCHEMA_VIEW_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"name": "AddButton",
				"values": {
					"size": "large"
				}
			},
			{
				"operation": "merge",
				"name": "MenuItem_ImportFromExcel",
				"values": {
					"clicked": {
						"request": "crt.ImportDataRequest",
						"params": {
							"entitySchemaName": "UsrWorkoutPrograms"
						}
					}
				}
			},
			{
				"operation": "merge",
				"name": "FolderTree",
				"values": {
					"rootSchemaName": "UsrWorkoutPrograms"
				}
			},
			{
				"operation": "merge",
				"name": "Filters",
				"values": {
					"schemaName": "UsrWorkoutPrograms",
					"visible": true,
					"headerTemplate": "#ResourceString(Filters_headerTemplate)#"
				}
			},
			{
				"operation": "merge",
				"name": "SectionContentWrapper",
				"values": {
					"visible": true,
					"padding": {
						"top": "none",
						"right": "none",
						"bottom": "none",
						"left": "none"
					},
					"borderRadius": "none",
					"alignItems": "stretch",
					"justifyContent": "start",
					"gap": "small",
					"wrap": "nowrap"
				}
			},
			{
				"operation": "merge",
				"name": "DataTable",
				"values": {
					"columns": [],
					"features": {
						"rows": {
							"selection": {
								"enable": true,
								"multiple": true
							}
						},
						"editable": {
							"enable": false,
							"itemsCreation": false,
							"floatingEditPanel": false
						},
						"header": {
							"visible": true
						},
						"columns": {
							"dragAndDrop": true,
							"resizing": true,
							"sorting": true
						}
					},
					"visible": true
				}
			},
			{
				"operation": "merge",
				"name": "Dashboards",
				"values": {
					"_designOptions": {
						"entitySchemaName": "UsrWorkoutPrograms",
						"dependencies": [
							{
								"attributePath": "Id",
								"relationPath": "PDS.Id"
							}
						],
						"filters": [
							{
								"attribute": "Filters_Filter",
								"loadOnChange": true
							}
						]
					}
				}
			},
			{
				"operation": "insert",
				"name": "PlannedSessionsReport",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(PlannedSessionsReport_caption)#",
					"color": "default",
					"disabled": false,
					"size": "large",
					"iconPosition": "only-text",
					"visible": true,
					"clicked": {
						"request": "crt.ShowTotalPricePopupRequest"
					},
					"clickMode": "default"
				},
				"parentName": "ActionButtonsContainer",
				"propertyName": "items",
				"index": 0
			}
		]/**SCHEMA_VIEW_CONFIG_DIFF*/,
		viewModelConfigDiff: /**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"path": [
					"attributes",
					"Items",
					"modelConfig",
					"sortingConfig"
				],
				"values": {
					"default": [
						{
							"direction": "asc",
							"columnName": "UsrCode"
						}
					]
				}
			}
		]/**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/,
		modelConfigDiff: /**SCHEMA_MODEL_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"path": [],
				"values": {
					"primaryDataSourceName": "UsrWorkoutProgramsDS"
				}
			},
			{
				"operation": "merge",
				"path": [
					"dataSources"
				],
				"values": {
					"UsrWorkoutProgramsDS": {
						"type": "crt.EntityDataSource",
						"scope": "page",
						"config": {
							"entitySchemaName": "UsrWorkoutPrograms",
							"loadParameters": {
								"options": {
									"pagingConfig": {
										"rowCount": 1,
										"rowsOffset": -1
									},
									"sortingConfig": {
										"columns": []
									}
								}
							},
							"allowCopyingRecords": false,
							"attributes": {
								"UsrOwnerName": {
									"path": "UsrOwner.Name",
									"type": "ForwardReference"
								}
							}
						}
					}
				}
			},
			{
				"operation": "merge",
				"path": [
					"dataSources",
					"PDS",
					"config"
				],
				"values": {
					"entitySchemaName": "UsrWorkoutPrograms",
					"attributes": {}
				}
			}
		]/**SCHEMA_MODEL_CONFIG_DIFF*/,
		handlers: /**SCHEMA_HANDLERS*/[
			{

    request: "crt.ShowTotalPricePopupRequest",
    handler: async (request, next) => {
try {
    const baseUrl = Terrasoft.utils.uri.getConfigurationWebServiceBaseUrl();
    const endpoint = Terrasoft.combinePath(baseUrl, "rest", "UsrSessionService", "GetSessionTotalPriceByCode");
    const httpClientService = new sdk.HttpClientService();
    const response = await httpClientService.post(endpoint);

    if (!response.ok) throw new Error(`Service failed with status ${response.status}`);

    const result = response.json ? await response.json() : response;
    const dataList = result.d || result;
    
    if (!dataList?.body?.GetSessionTotalPriceByCodeResult?.length) {
        await request.$context.executeRequest({
            type: "crt.ShowDialogRequest",
            $context: request.$context,
            dialogConfig: { data: { title: "Info", message: "No planned sessions found.", actions: [{ key: "OK" }] } }
        });
        return next?.handle(request);
    }

    const resObj = dataList.body.GetSessionTotalPriceByCodeResult;

    // 1. Build a full HTML document string
    const htmlContent = `
        <!DOCTYPE html>
        <html>
        <head>
            <meta charset="UTF-8">
            <title>Total Price of Planned Sessions</title>
            <style>
                body { font-family: 'Open Sans', Arial, sans-serif; padding: 20px; background: #f9f9f9; color: #333; }
                h2 { color: #0052A3; font-weight: 600; margin-top: 0; }
                table { width: 100%; border-collapse: collapse; background: white; box-shadow: 0 2px 4px rgba(0,0,0,0.1); }
                th, td { border: 1px solid #e0e0e0; padding: 10px 15px; text-align: left; }
                th { background-color: #f5f5f5; font-weight: 600; }
                tr:nth-child(even) { background-color: #fafafa; }
                .close-btn { 
                    margin-top: 20px; padding: 10px 24px; 
                    background: #0052A3; color: white; border: none; 
                    border-radius: 4px; cursor: pointer; font-size: 14px; float: right;
                }
                .close-btn:hover { background: #003d7a; }
            </style>
        </head>
        <body>
            <h2>Total Price of Planned Sessions</h2>
            <table>
                <thead>
                    <tr><th>Code</th><th>Total Price</th></tr>
                </thead>
                <tbody>
                    ${resObj.map(item => `
                        <tr>
                            <td>${item.Code || 'N/A'}</td>
                            <td>$${Number(item.TotalPrice || 0).toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})}</td>
                        </tr>
                    `).join('')}
                </tbody>
            </table>
            <button class="close-btn" onclick="window.close()">Close</button>
        </body>
        </html>
    `;

    // 2. Create a Blob and open it in a new window
    const blob = new Blob([htmlContent], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    
    // Note: Popup blockers usually allow this because it is triggered by a user click
    window.open(url, '_blank', 'width=600,height=500,scrollbars=yes,resizable=yes');
    setTimeout(() => URL.revokeObjectURL(url), 1000);

} catch (error) {
    console.error("Service Error:", error);
    await request.$context.executeRequest({
        type: "crt.NotificationRequest",
        message: "Failed to load total prices."
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