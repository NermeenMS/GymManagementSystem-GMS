define("UsrWorkoutPrograms_FormPage", /**SCHEMA_DEPS*/[]/**SCHEMA_DEPS*/, function/**SCHEMA_ARGS*/()/**SCHEMA_ARGS*/ {
	return {
		viewConfigDiff: /**SCHEMA_VIEW_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"name": "SaveButton",
				"values": {
					"size": "large",
					"iconPosition": "only-text"
				}
			},
			{
				"operation": "merge",
				"name": "SideAreaProfileContainer",
				"values": {
					"gap": {
						"columnGap": "large",
						"rowGap": "none"
					},
					"visible": true,
					"alignItems": "stretch"
				}
			},
			{
				"operation": "merge",
				"name": "Tabs",
				"values": {
					"styleType": "default",
					"mode": "tab",
					"bodyBackgroundColor": "primary-contrast-500",
					"selectedTabTitleColor": "auto",
					"tabTitleColor": "auto",
					"underlineSelectedTabColor": "auto",
					"headerBackgroundColor": "auto",
					"allowToggleClose": true
				}
			},
			{
				"operation": "merge",
				"name": "GeneralInfoTabContainer",
				"values": {
					"gap": {
						"columnGap": "large",
						"rowGap": "none"
					},
					"visible": true,
					"padding": {
						"top": "none",
						"right": "none",
						"bottom": "none",
						"left": "none"
					},
					"color": "transparent",
					"borderRadius": "none",
					"alignItems": "stretch"
				}
			},
			{
				"operation": "merge",
				"name": "Feed",
				"values": {
					"dataSourceName": "PDS",
					"entitySchemaName": "UsrWorkoutPrograms"
				}
			},
			{
				"operation": "merge",
				"name": "AttachmentList",
				"values": {
					"columns": [
						{
							"id": "c6042553-2fac-4dfc-93eb-58fe690117a0",
							"code": "AttachmentListDS_Name",
							"caption": "#ResourceString(AttachmentListDS_Name)#",
							"dataValueType": 28,
							"width": 200
						}
					]
				}
			},
			{
				"operation": "insert",
				"name": "UsrTitle",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"label": "$Resources.Strings.UsrName",
					"control": "$UsrName",
					"labelPosition": "auto",
					"multiline": false
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Code",
				"values": {
					"type": "crt.Input",
					"label": "$Resources.Strings.PDS_UsrCode_q9oegqh",
					"control": "$PDS_UsrCode_q9oegqh",
					"placeholder": "",
					"tooltip": "",
					"readonly": false,
					"multiline": false,
					"labelPosition": "auto",
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 2,
						"rowSpan": 1
					}
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "WorkoutFrequency",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PDS_UsrWorkoutFrequency_4z3jp20",
					"ariaLabel": "",
					"isAddAllowed": true,
					"showValueAsLink": true,
					"labelPosition": "auto",
					"controlActions": [],
					"listActions": [],
					"tooltip": "",
					"control": "$PDS_UsrWorkoutFrequency_4z3jp20",
					"visible": true,
					"readonly": false,
					"placeholder": "",
					"valueDetails": null
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "addRecord_8i72wmh",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_8i72wmh_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "WorkoutFrequency",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Owner",
				"values": {
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PDS_UsrOwner_mqnmzi3",
					"ariaLabel": "",
					"isAddAllowed": true,
					"showValueAsLink": true,
					"labelPosition": "auto",
					"controlActions": [],
					"listActions": [],
					"tooltip": "",
					"control": "$PDS_UsrOwner_mqnmzi3",
					"valueDetails": null
				},
				"parentName": "GeneralInfoTab",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "addRecord_di1tldq",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_di1tldq_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "Owner",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Input_6lvoo3w",
				"values": {
					"type": "crt.EmailInput",
					"label": "#ResourceString(Input_6lvoo3w_label)#",
					"control": "$PDS_UsrOwnerEmail_56o356e",
					"placeholder": "",
					"tooltip": "#ResourceString(Input_6lvoo3w_tooltip)#",
					"readonly": true,
					"multiline": false,
					"labelPosition": "auto",
					"visible": true
				},
				"parentName": "GeneralInfoTab",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "Active",
				"values": {
					"type": "crt.Checkbox",
					"value": true,
					"disabled": false,
					"inversed": false,
					"label": "$Resources.Strings.PDS_UsrActive_2m3jhyx",
					"ariaLabel": "",
					"labelPosition": "auto",
					"tooltip": "#ResourceString(Active_tooltip)#",
					"control": "$PDS_UsrActive_2m3jhyx",
					"visible": true,
					"readonly": false,
					"placeholder": ""
				},
				"parentName": "GeneralInfoTab",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "Notes",
				"values": {
					"type": "crt.RichTextEditor",
					"label": "$Resources.Strings.PDS_UsrNotes_3up1vjg",
					"control": "$PDS_UsrNotes_3up1vjg",
					"labelPosition": "auto",
					"placeholder": "",
					"tooltip": "",
					"needHandleSave": true,
					"filesStorage": {
						"masterRecordColumnValue": "$Id",
						"entitySchemaName": "SysFile",
						"recordColumnName": "RecordId"
					}
				},
				"parentName": "GeneralInfoTab",
				"propertyName": "items",
				"index": 4
			},
			{
				"operation": "insert",
				"name": "ExpansionPanel_9n3hy4p",
				"values": {
					"type": "crt.ExpansionPanel",
					"tools": [],
					"items": [],
					"title": "#ResourceString(ExpansionPanel_9n3hy4p_title)#",
					"toggleType": "default",
					"togglePosition": "before",
					"expanded": true,
					"labelColor": "auto",
					"fullWidthHeader": false,
					"titleWidth": 20,
					"padding": {
						"top": "small",
						"bottom": "small",
						"left": "none",
						"right": "none"
					},
					"fitContent": true
				},
				"parentName": "GeneralInfoTab",
				"propertyName": "items",
				"index": 5
			},
			{
				"operation": "insert",
				"name": "GridContainer_v1fsjok",
				"values": {
					"type": "crt.GridContainer",
					"rows": "minmax(max-content, 24px)",
					"columns": [
						"minmax(32px, 1fr)"
					],
					"gap": {
						"columnGap": "large",
						"rowGap": 0
					},
					"styles": {
						"overflow-x": "hidden"
					},
					"items": []
				},
				"parentName": "ExpansionPanel_9n3hy4p",
				"propertyName": "tools",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "FlexContainer_q3phfnv",
				"values": {
					"type": "crt.FlexContainer",
					"direction": "row",
					"gap": "none",
					"alignItems": "center",
					"items": [],
					"layoutConfig": {
						"colSpan": 1,
						"column": 1,
						"row": 1,
						"rowSpan": 1
					}
				},
				"parentName": "GridContainer_v1fsjok",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailAddBtn_wc24r5c",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailAddBtn_wc24r5c_caption)#",
					"icon": "add-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.CreateRecordRequest",
						"params": {
							"entityName": "UsrWorkoutSessions",
							"defaultValues": [
								{
									"attributeName": "UsrSessionsParentWorkOutPrograms",
									"value": "$Id"
								}
							]
						}
					},
					"visible": true,
					"clickMode": "default"
				},
				"parentName": "FlexContainer_q3phfnv",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailRefreshBtn_lc6p641",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailRefreshBtn_lc6p641_caption)#",
					"icon": "reload-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.LoadDataRequest",
						"params": {
							"config": {
								"loadType": "reload"
							},
							"dataSourceName": "GridDetail_ny49ndeDS"
						}
					}
				},
				"parentName": "FlexContainer_q3phfnv",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridDetailSettingsBtn_kon4ctr",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailSettingsBtn_kon4ctr_caption)#",
					"icon": "actions-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clickMode": "menu",
					"menuItems": []
				},
				"parentName": "FlexContainer_q3phfnv",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "GridDetailExportDataBtn_i9o8jqq",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(GridDetailExportDataBtn_i9o8jqq_caption)#",
					"icon": "export-button-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.ExportDataGridToExcelRequest",
						"params": {
							"viewName": "GridDetail_ny49nde"
						}
					}
				},
				"parentName": "GridDetailSettingsBtn_kon4ctr",
				"propertyName": "menuItems",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailImportDataBtn_vah6cz0",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(GridDetailImportDataBtn_vah6cz0_caption)#",
					"icon": "import-button-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.ImportDataRequest",
						"params": {
							"entitySchemaName": "UsrWorkoutSessions"
						}
					}
				},
				"parentName": "GridDetailSettingsBtn_kon4ctr",
				"propertyName": "menuItems",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridDetailSearchFilter_m07id7n",
				"values": {
					"type": "crt.SearchFilter",
					"placeholder": "#ResourceString(GridDetailSearchFilter_m07id7n_placeholder)#",
					"iconOnly": true,
					"_filterOptions": {
						"expose": [
							{
								"attribute": "GridDetailSearchFilter_m07id7n_GridDetail_ny49nde",
								"converters": [
									{
										"converter": "crt.SearchFilterAttributeConverter",
										"args": [
											"GridDetail_ny49nde"
										]
									}
								]
							}
						],
						"from": [
							"GridDetailSearchFilter_m07id7n_SearchValue",
							"GridDetailSearchFilter_m07id7n_FilteredColumnsGroups"
						]
					}
				},
				"parentName": "FlexContainer_q3phfnv",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "GridContainer_9tesfem",
				"values": {
					"type": "crt.GridContainer",
					"rows": "minmax(max-content, 32px)",
					"columns": [
						"minmax(32px, 1fr)",
						"minmax(32px, 1fr)"
					],
					"gap": {
						"columnGap": "large",
						"rowGap": 0
					},
					"styles": {
						"overflow-x": "hidden"
					},
					"items": []
				},
				"parentName": "ExpansionPanel_9n3hy4p",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetail_ny49nde",
				"values": {
					"type": "crt.DataGrid",
					"layoutConfig": {
						"colSpan": 2,
						"column": 1,
						"row": 1,
						"rowSpan": 6
					},
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
						}
					},
					"items": "$GridDetail_ny49nde",
					"primaryColumnName": "GridDetail_ny49ndeDS_Id",
					"columns": [
						{
							"id": "b8cc378e-08b6-1dae-b994-7a79c3f2d92c",
							"code": "GridDetail_ny49ndeDS_UsrTrainer",
							"caption": "#ResourceString(GridDetail_ny49ndeDS_UsrTrainer)#",
							"dataValueType": 28,
							"width": 106
						},
						{
							"id": "47b2434a-ba2d-748e-b1f7-f9ce2df7457c",
							"code": "GridDetail_ny49ndeDS_UsrPrice",
							"caption": "#ResourceString(GridDetail_ny49ndeDS_UsrPrice)#",
							"dataValueType": 6,
							"width": 79
						},
						{
							"id": "0987edf4-de49-b933-407b-879daaf72dcc",
							"code": "GridDetail_ny49ndeDS_UsrSessionsStatus",
							"caption": "#ResourceString(GridDetail_ny49ndeDS_UsrSessionsStatus)#",
							"dataValueType": 10,
							"width": 152
						},
						{
							"id": "3aea0447-6449-174c-bd1e-31abde2e0a37",
							"code": "GridDetail_ny49ndeDS_UsrWorkoutdate",
							"caption": "#ResourceString(GridDetail_ny49ndeDS_UsrWorkoutdate)#",
							"dataValueType": 7,
							"width": 138
						},
						{
							"id": "c7959e3d-cc37-4a47-2acf-054c6378e432",
							"code": "GridDetail_ny49ndeDS_UsrNumberofparticipants",
							"caption": "#ResourceString(GridDetail_ny49ndeDS_UsrNumberofparticipants)#",
							"dataValueType": 4,
							"width": 210
						}
					],
					"placeholder": false,
					"visible": true,
					"fitContent": true
				},
				"parentName": "GridContainer_9tesfem",
				"propertyName": "items",
				"index": 0
			}
		]/**SCHEMA_VIEW_CONFIG_DIFF*/,
		viewModelConfigDiff: /**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"path": [
					"attributes"
				],
				"values": {
					"UsrName": {
						"modelConfig": {
							"path": "PDS.UsrTitle"
						}
					},
					"PDS_UsrCode_q9oegqh": {
						"modelConfig": {
							"path": "PDS.UsrCode"
						}
					},
					"PDS_UsrWorkoutFrequency_4z3jp20": {
						"modelConfig": {
							"path": "PDS.UsrWorkoutFrequency"
						}
					},
					"PDS_UsrWorkoutFrequency_4z3jp20_List": {
						"isCollection": true,
						"modelConfig": {
							"sortingConfig": {
								"default": [
									{
										"columnName": "Name",
										"direction": "asc"
									}
								]
							}
						}
					},
					"PDS_UsrActive_2m3jhyx": {
						"modelConfig": {
							"path": "PDS.UsrActive"
						}
					},
					"PDS_UsrNotes_3up1vjg": {
						"modelConfig": {
							"path": "PDS.UsrNotes"
						}
					},
					"PDS_UsrOwner_mqnmzi3": {
						"modelConfig": {
							"path": "PDS.UsrOwner"
						}
					},
					"PDS_UsrOwner_mqnmzi3_List": {
						"isCollection": true,
						"modelConfig": {
							"sortingConfig": {
								"default": [
									{
										"columnName": "Name",
										"direction": "asc"
									}
								]
							}
						}
					},
					"PDS_UsrOwnerEmail_56o356e": {
						"modelConfig": {
							"path": "PDS.UsrOwnerEmail_56o356e"
						}
					},
					"GridDetail_ny49nde": {
						"isCollection": true,
						"modelConfig": {
							"path": "GridDetail_ny49ndeDS",
							"filterAttributes": [
								{
									"name": "GridDetailSearchFilter_m07id7n_GridDetail_ny49nde",
									"loadOnChange": true
								}
							],
							"sortingConfig": {
								"default": [
									{
										"direction": "asc",
										"columnName": "UsrSessionsStatus"
									}
								]
							}
						},
						"viewModelConfig": {
							"attributes": {
								"GridDetail_ny49ndeDS_UsrTrainer": {
									"modelConfig": {
										"path": "GridDetail_ny49ndeDS.UsrTrainer"
									}
								},
								"GridDetail_ny49ndeDS_UsrPrice": {
									"modelConfig": {
										"path": "GridDetail_ny49ndeDS.UsrPrice"
									}
								},
								"GridDetail_ny49ndeDS_UsrSessionsStatus": {
									"modelConfig": {
										"path": "GridDetail_ny49ndeDS.UsrSessionsStatus"
									}
								},
								"GridDetail_ny49ndeDS_UsrWorkoutdate": {
									"modelConfig": {
										"path": "GridDetail_ny49ndeDS.UsrWorkoutdate"
									}
								},
								"GridDetail_ny49ndeDS_UsrNumberofparticipants": {
									"modelConfig": {
										"path": "GridDetail_ny49ndeDS.UsrNumberofparticipants"
									}
								},
								"GridDetail_ny49ndeDS_Id": {
									"modelConfig": {
										"path": "GridDetail_ny49ndeDS.Id"
									}
								}
							}
						}
					}
				}
			},
			{
				"operation": "merge",
				"path": [
					"attributes",
					"Id",
					"modelConfig"
				],
				"values": {
					"path": "PDS.Id"
				}
			}
		]/**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/,
		modelConfigDiff: /**SCHEMA_MODEL_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"path": [],
				"values": {
					"primaryDataSourceName": "PDS",
					"dependencies": {
						"GridDetail_ny49ndeDS": [
							{
								"attributePath": "UsrSessionsParentWorkOutPrograms",
								"relationPath": "PDS.Id"
							}
						]
					}
				}
			},
			{
				"operation": "merge",
				"path": [
					"dataSources"
				],
				"values": {
					"PDS": {
						"type": "crt.EntityDataSource",
						"config": {
							"entitySchemaName": "UsrWorkoutPrograms",
							"attributes": {
								"UsrOwnerEmail_56o356e": {
									"path": "UsrOwner.Email",
									"type": "ForwardReference"
								}
							}
						},
						"scope": "page"
					},
					"GridDetail_ny49ndeDS": {
						"type": "crt.EntityDataSource",
						"scope": "viewElement",
						"config": {
							"entitySchemaName": "UsrWorkoutSessions",
							"attributes": {
								"UsrTrainer": {
									"path": "UsrTrainer"
								},
								"UsrPrice": {
									"path": "UsrPrice"
								},
								"UsrSessionsStatus": {
									"path": "UsrSessionsStatus"
								},
								"UsrWorkoutdate": {
									"path": "UsrWorkoutdate"
								},
								"UsrNumberofparticipants": {
									"path": "UsrNumberofparticipants"
								}
							}
						}
					}
				}
			}
		]/**SCHEMA_MODEL_CONFIG_DIFF*/,
		handlers: /**SCHEMA_HANDLERS*/[
				{
					request: "crt.SaveRecordRequest",
				handler: async (request, next) => {
					// Import the Creatio SDK for Freedom UI
					const sdk = require("@creatio-devkit/common");
					 const sysSettingsService = new sdk.SysSettingsService();
		try {	
					// 1. Get the System Setting value 
					// TODO: Replace 'Usr_MaxActiveDailyPrograms' with the actual Code of your System Setting
					const maxAllowed = await sysSettingsService.getByCode("UsrMaxActiveDailyPrograms");
					
		 const esq = new sdk.EntitySchemaQuery({
                entitySchemaName: "UsrWorkoutPrograms"
            });
            esq.addColumn("Id");

            const filterGroup = new sdk.FilterGroup();

            // 4. Add filter: Active = true

			await filterGroup.addSchemaColumnFilterWithParameter(sdk.ComparisonType.Equal, "UsrActive", true);
					
					// Filter 2: Workout Frequency = Daily 
					// TODO: Replace 'YOUR_DAILY_LOOKUP_ID' with the actual GUID of the "Daily" lookup value.
					await filterGroup.addSchemaColumnFilterWithParameter(sdk.ComparisonType.Equal, "UsrWorkoutFrequency"
																		 , "6F99E2FC-D6C6-4F51-8B01-20BCDFC11A1D" );
				
					  esq.filter = filterGroup;
					// 3. Get the count of records matching the filters
					// const count = await esq.rows.count();
					const sysProcessElementLogModel = await sdk.Model.create("UsrWorkoutPrograms");
const sysProcessElementLog = await sysProcessElementLogModel.load({
                attributes: ["Id"],
                parameters: [{
                    type: sdk.ModelParameterType.Filter,
                    value: filterGroup
                }]
            });
					const count = sysProcessElementLog.length;
					// 4. Validate and show message if limit is exceeded
					if (count >= maxAllowed.value) {
						let currentRowIsActive = await request.$context.PDS_UsrActive_2m3jhyx;
						console.log(currentRowIsActive);	
						let currentRowFreq = await request.$context.PDS_UsrWorkoutFrequency_4z3jp20;
											//console.log(currentRowFreq);
						debugger;
						// Show a message to the user
						if(currentRowIsActive && currentRowFreq.value === "6f99e2fc-d6c6-4f51-8b01-20bcdfc11a1d")
						{ 
							await request.$context.executeRequest({
                        type: "crt.ShowDialogRequest",
                        $context: request.$context,
                        dialogConfig: {
                            data: {
                                message: "More than " + maxAllowed.value + " active daily programs is not allowed. Current count: " + count,
                                actions: [{
                                    key: "OK",
                                    config: {
                                        color: "warn", // Red color to indicate an error/validation block
                                        caption: "OK"
                                    }
                                }]
                            }
                        }
                    });
						
					  // Return early to STOP the save process
                    return; 
						}
                }
}
             catch (error) {
                console.error("Save validation error:", error);
                // Show a simple toast notification if something fails unexpectedly
                await request.$context.executeRequest({
                    type: "crt.NotificationRequest",
                    message: "An error occurred while validating the record."
                });
                return;
            }
					// If validation passes, proceed with saving
					return next?.handle(request);
				}
		}

			
		]/**SCHEMA_HANDLERS*/,
		converters: /**SCHEMA_CONVERTERS*/{}/**SCHEMA_CONVERTERS*/,
		validators: /**SCHEMA_VALIDATORS*/{}/**SCHEMA_VALIDATORS*/
	};
});