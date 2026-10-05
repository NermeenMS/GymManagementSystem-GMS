namespace Terrasoft.Configuration
{

	using System;
	using System.Collections.Generic;
	using System.Collections.ObjectModel;
	using System.Globalization;
	using Terrasoft.Common;
	using Terrasoft.Core;
	using Terrasoft.Core.Configuration;

	#region Class: UsrSessionsServiceSchema

	/// <exclude/>
	public class UsrSessionsServiceSchema : Terrasoft.Core.SourceCodeSchema
	{

		#region Constructors: Public

		public UsrSessionsServiceSchema(SourceCodeSchemaManager sourceCodeSchemaManager)
			: base(sourceCodeSchemaManager) {
		}

		public UsrSessionsServiceSchema(UsrSessionsServiceSchema source)
			: base( source) {
		}

		#endregion

		#region Methods: Protected

		protected override void InitializeProperties() {
			base.InitializeProperties();
			UId = new Guid("86627b26-79aa-46a9-b74c-de70a4b1066c");
			Name = "UsrSessionsService";
			ParentSchemaUId = new Guid("50e3acc0-26fc-4237-a095-849a1d534bd3");
			CreatedInPackageId = new Guid("dc9f3900-e04a-4db4-b02b-f9506c84509d");
			ZipBody = new byte[] { 31,139,8,0,0,0,0,0,4,0,227,229,226,229,2,0,68,21,194,139,4,0,0,0 };
		}

		#endregion

		#region Methods: Public

		public override void GetParentRealUIds(Collection<Guid> realUIds) {
			base.GetParentRealUIds(realUIds);
			realUIds.Add(new Guid("86627b26-79aa-46a9-b74c-de70a4b1066c"));
		}

		#endregion

	}

	#endregion

}

