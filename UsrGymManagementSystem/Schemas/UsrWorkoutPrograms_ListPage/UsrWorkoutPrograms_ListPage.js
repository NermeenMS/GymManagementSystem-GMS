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
            // 1. Fetch the data directly in the handler

			const baseUrl = Terrasoft.utils.uri.getConfigurationWebServiceBaseUrl();
					const transferName = "rest";
					const serviceName = "UsrSessionService";
					const methodName = "GetSessionTotalPriceByCode";
					const endpoint = Terrasoft.combinePath(baseUrl, transferName, serviceName, methodName);
					const httpClientService = new sdk.HttpClientService();
					
					const response = await httpClientService.post(endpoint);

            //console.log("Service Response Status:", response.status);
			
            if (!response.ok) {
    //const errorText = await response.text();
    console.error("Service Error Details:", errorText);
    throw new Error(`Service failed with status ${response.status}`);
}
            
            const result = await response;
            const dataList = result.d || result;
           if (!dataList || !dataList.body.GetSessionTotalPriceByCodeResult || dataList.body.GetSessionTotalPriceByCodeResult.length === 0) {
                await request.$context.executeRequest({
                    type: "crt.ShowDialogRequest",
                    $context: request.$context,
                    dialogConfig: {
                        data: {
                            title: "Total Price of Planned Sessions",
                            message: "No planned sessions found.",
                            actions: [{ key: "OK", config: { color: "primary", caption: "Close" } }]
                        }
                    }
                });
                return next?.handle(request);
            }
const resObj=dataList.body.GetSessionTotalPriceByCodeResult;
						 debugger;
            // 5. Format data for the dialog display
            const formattedList = resObj.map(item => `Code: ${item.Code}   ....   Total Price: $${item.TotalPrice}`).join('\n');

            // 6. Show the native Creatio Dialog
            await request.$context.executeRequest({
                type: "crt.ShowDialogRequest",
                $context: request.$context,
                dialogConfig: {
                    data: {
                        title: "Total Price of Planned Sessions",
                        message: formattedList,
                        actions: [{
                            key: "OK",
                            config: { color: "primary", caption: "Close" }
                        }]
                    }
                }
            });

        } catch (error) {
            console.error("Service Error:", error);
            await request.$context.executeRequest({
                type: "crt.NotificationRequest",
                message: "Failed to load total prices. Check console for details."
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