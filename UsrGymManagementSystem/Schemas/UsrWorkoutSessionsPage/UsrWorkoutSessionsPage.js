define("UsrWorkoutSessionsPage", /**SCHEMA_DEPS*/[]/**SCHEMA_DEPS*/, function/**SCHEMA_ARGS*/()/**SCHEMA_ARGS*/ {
	return {
		viewConfigDiff: /**SCHEMA_VIEW_CONFIG_DIFF*/[
			{
				"operation": "insert",
				"name": "Input_8l0zsoj",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 1,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"label": "$Resources.Strings.UsrWorkoutSessionsDS_UsrTrainer_ib9ambr",
					"control": "$UsrWorkoutSessionsDS_UsrTrainer_ib9ambr",
					"placeholder": "",
					"tooltip": "",
					"readonly": false,
					"multiline": false,
					"labelPosition": "above"
				},
				"parentName": "MainContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ComboBox_vf0veb9",
				"values": {
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.UsrWorkoutSessionsDS_UsrSessionsStatus_i4wtlqz",
					"ariaLabel": "",
					"isAddAllowed": true,
					"showValueAsLink": true,
					"labelPosition": "above",
					"controlActions": [],
					"listActions": [],
					"tooltip": "",
					"control": "$UsrWorkoutSessionsDS_UsrSessionsStatus_i4wtlqz"
				},
				"parentName": "Main",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "addRecord_e07hsku",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_e07hsku_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "ComboBox_vf0veb9",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "NumberInput_s3mui2f",
				"values": {
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.UsrWorkoutSessionsDS_UsrNumberofparticipants_afl12ov",
					"control": "$UsrWorkoutSessionsDS_UsrNumberofparticipants_afl12ov",
					"readonly": false,
					"placeholder": "",
					"labelPosition": "above",
					"tooltip": ""
				},
				"parentName": "Main",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "DateTimePicker_9sgpq8c",
				"values": {
					"type": "crt.DateTimePicker",
					"label": "$Resources.Strings.UsrWorkoutSessionsDS_UsrWorkoutdate_szxgujc",
					"placeholder": "",
					"readonly": false,
					"labelPosition": "above",
					"tooltip": "",
					"pickerType": "datetime",
					"control": "$UsrWorkoutSessionsDS_UsrWorkoutdate_szxgujc"
				},
				"parentName": "Main",
				"propertyName": "items",
				"index": 4
			},
			{
				"operation": "insert",
				"name": "NumberInput_ugclldz",
				"values": {
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.UsrWorkoutSessionsDS_UsrPrice_q57pqwt",
					"control": "$UsrWorkoutSessionsDS_UsrPrice_q57pqwt",
					"readonly": false,
					"placeholder": "",
					"labelPosition": "above",
					"tooltip": ""
				},
				"parentName": "Main",
				"propertyName": "items",
				"index": 5
			}
		]/**SCHEMA_VIEW_CONFIG_DIFF*/,
		viewModelConfigDiff: /**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"path": [
					"attributes"
				],
				"values": {
					"UsrWorkoutSessionsDS_UsrTrainer_ib9ambr": {
						"modelConfig": {
							"path": "UsrWorkoutSessionsDS.UsrTrainer"
						}
					},
					"UsrWorkoutSessionsDS_UsrSessionsStatus_i4wtlqz": {
						"modelConfig": {
							"path": "UsrWorkoutSessionsDS.UsrSessionsStatus"
						}
					},
					"UsrWorkoutSessionsDS_UsrSessionsStatus_i4wtlqz_List": {
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
					"UsrWorkoutSessionsDS_UsrNumberofparticipants_afl12ov": {
						"modelConfig": {
							"path": "UsrWorkoutSessionsDS.UsrNumberofparticipants"
						}
					},
					"UsrWorkoutSessionsDS_UsrWorkoutdate_szxgujc": {
						"modelConfig": {
							"path": "UsrWorkoutSessionsDS.UsrWorkoutdate"
						}
					},
					"UsrWorkoutSessionsDS_UsrPrice_q57pqwt": {
						"modelConfig": {
							"path": "UsrWorkoutSessionsDS.UsrPrice"
						}
					}
				}
			}
		]/**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/,
		modelConfigDiff: /**SCHEMA_MODEL_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"path": [],
				"values": {
					"dataSources": {
						"UsrWorkoutSessionsDS": {
							"type": "crt.EntityDataSource",
							"scope": "page",
							"config": {
								"entitySchemaName": "UsrWorkoutSessions",
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
								"allowCopyingRecords": false
							}
						}
					},
					"primaryDataSourceName": "UsrWorkoutSessionsDS"
				}
			}
		]/**SCHEMA_MODEL_CONFIG_DIFF*/,
		handlers: /**SCHEMA_HANDLERS*/[]/**SCHEMA_HANDLERS*/,
		converters: /**SCHEMA_CONVERTERS*/{}/**SCHEMA_CONVERTERS*/,
		validators: /**SCHEMA_VALIDATORS*/{}/**SCHEMA_VALIDATORS*/
	};
});