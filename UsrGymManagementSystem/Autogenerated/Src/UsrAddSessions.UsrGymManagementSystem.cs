namespace Terrasoft.Core.Process
{

	using System;
	using System.Collections.Generic;
	using System.Collections.ObjectModel;
	using System.Drawing;
	using System.Globalization;
	using System.Text;
	using Terrasoft.Common;
	using Terrasoft.Core;
	using Terrasoft.Core.Configuration;
	using Terrasoft.Core.DB;
	using Terrasoft.Core.Entities;
	using Terrasoft.Core.Process;
	using Terrasoft.Core.Process.Configuration;

	#region Class: UsrAddSessionsMethodsWrapper

	/// <exclude/>
	public class UsrAddSessionsMethodsWrapper : ProcessModel
	{

		public UsrAddSessionsMethodsWrapper(Process process)
			: base(process) {
			AddScriptTaskMethod("GetUserNameTaskExecute", GetUserNameTaskExecute);
		}

		#region Methods: Private

		private bool GetUserNameTaskExecute(ProcessExecutingContext context) {
			string currentUserName = UserConnection.CurrentUser.Name; 
			Set("CurrentUserNameParam", currentUserName);
			return true;
		}

		#endregion

	}

	#endregion

}

