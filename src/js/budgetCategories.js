// If budgetApp is undefined, assign new obj
// else use existing budgetApp obj
var budgetApp = budgetApp || {};

`use strict`;

budgetApp.categories = [
	{
		name      : 'Income',
		classname : 'income',
		icon      : 'fa fa-money',
		form      : {
			name      : 'income-form',
			classlist : 'income-form income',
			trashicon : 'fa fa-trash',
		},
		inputs    : [
			{
				name  : 'income-salary',
				title : 'Salary / Wages',
			},
			{
				name  : 'income-other',
				title : 'Other',
			},
	],
	},

  /*
	{
		name      : 'Housing',
		classname : 'housing',
		icon      : 'fa fa-home',
		form      : {
			name      : 'housing-form',
			classlist : 'housing-form housing',
			trashicon : 'fa fa-trash',
		},
		inputs    : [
			{
				name  : 'expense-housing',
				title : 'Housing',
			},
			{
				name  : 'expense-housing-insurance',
				title : 'Insurance',
			},
			{
				name  : 'expense-housing-utilities',
				title : 'Utilities',
			},
			{
				name  : 'expense-housing-cable-internet',
				title : 'Cable / Internet',
			},
			{
				name  : 'expense-housing-maintenance',
				title : 'Maintenance',
			},
		],
	},
  */

	{
		name      : 'Housing',
		classname : 'housing',
		icon      : 'fa fa-home',
		form      : {
			name      : 'housing-form',
			classlist : 'housing-form housing',
			trashicon : 'fa fa-trash',
		},
		inputs    : [
			{
				name  : 'housing',
				title : 'Housing',
			},
			{
				name  : 'housing-insurance',
				title : 'Insurance',
			},
			{
				name  : 'housing-utilities',
				title : 'Utilities',
			},
			{
				name  : 'housing-cable-internet',
				title : 'Cable / Internet',
			},
			{
				name  : 'housing-maintenance',
				title : 'Maintenance',
			},
		],
	},

  /*
	{
		name      : 'Transportation',
		classname : 'transportation',
		icon      : 'fa fa-car',
		form      : {
			name      : 'transportation-form',
			classlist : 'transportation-form transportation',
			trashicon : 'fa fa-trash',
		},
		inputs    : [
			{
				name  : 'expense-transportation-payment',
				title : 'Payment',
			},
			{
				name  : 'expense-transportation-insurance',
				title : 'Insurance',
			},
			{
				name  : 'expense-transportation-fuel',
				title : 'Fuel',
			},
			{
				name  : 'expense-transportation-maintenance',
				title : 'Maintenance',
			},
		],
	},
  */

	{
		name      : 'Transportation',
		classname : 'transportation',
		icon      : 'fa fa-car',
		form      : {
			name      : 'transportation-form',
			classlist : 'transportation-form transportation',
			trashicon : 'fa fa-trash',
		},
		inputs    : [
			{
				name  : 'transportation-payment',
				title : 'Payment',
			},
			{
				name  : 'transportation-insurance',
				title : 'Insurance',
			},
			{
				name  : 'transportation-fuel',
				title : 'Fuel',
			},
			{
				name  : 'transportation-maintenance',
				title : 'Maintenance',
			},
		],
	},

  /*
	{
		name      : 'Education',
		classname : 'education',
		icon      : 'fa fa-graduation-cap',
		form      : {
			name      : 'education-form',
			classlist : 'education-form education',
			trashicon : 'fa fa-trash',
		},
		inputs    : [
			{
				name  : 'expense-education-tuition',
				title : 'Tuition',
			},
			{
				name  : 'expense-education-supplies',
				title : 'Supplies',
			},
			{
				name  : 'expense-education-loans',
				title : 'Loans',
			},
		],
	},
  */

	{
		name      : 'Education',
		classname : 'education',
		icon      : 'fa fa-graduation-cap',
		form      : {
			name      : 'education-form',
			classlist : 'education-form education',
			trashicon : 'fa fa-trash',
		},
		inputs    : [
			{
				name  : 'education-tuition',
				title : 'Tuition',
			},
			{
				name  : 'education-supplies',
				title : 'Supplies',
			},
			{
				name  : 'education-loans',
				title : 'Loans',
			},
		],
	},

  /*
	{
		name      : 'Loans & Credit Cards',
		classname : 'loans-credit-cards',
		icon      : 'fa fa-credit-card-alt',
		form      : {
			name      : 'loans-credit-cards-form',
			classlist : 'loans-credit-cards-form loans-credit',
			trashicon : 'fa fa-trash',
		},
		inputs    : [
			{
				name  : 'expense-loans',
				title : 'Loans Payment',
			},
			{
				name  : 'expense-credit-cards',
				title : 'Credit Cards',
			},
		],
	},
  */

	{
		name      : 'Loans & Credit Cards',
		classname : 'loans-credit-cards',
		icon      : 'fa fa-credit-card-alt',
		form      : {
			name      : 'loans-credit-cards-form',
			classlist : 'loans-credit-cards-form loans-credit',
			trashicon : 'fa fa-trash',
		},
		inputs    : [
			{
				name  : 'loans-credit-cards-loan-payment',
				title : 'Loan Payment',
			},
			{
				name  : 'loans-credit-cards-credit-card-payment',
				title : 'Credit Card Payment',
			},
		],
	},


	{
		name      : 'Savings & Investing',
		classname : 'savings-investing',
		icon      : 'fa fa-bank',
		form      : {
			name      : 'savings-investing-form',
			classlist : 'savings-investing-form savings-investing',
			trashicon : 'fa fa-trash',
		},
		inputs    : [
			{
				name  : 'savings-investings-retirement',
				title : 'Retirement',
			},
			{
				name  : 'savings-investings-emergency',
				title : 'Emergency',
			},
			{
				name  : 'savings-investings-stocks',
				title : 'Stocks',
			},
		],
	},

	{
		name      : 'Miscellaneous',
		classname : 'miscellaneous',
		icon      : 'fa fa-paperclip',
		form      : {
			name      : 'miscellaneous-form',
			classlist : 'miscellaneous-form miscellaneous',
			trashicon : 'fa fa-trash',
		},
		inputs    : [
			{
				name  : 'miscellaneous-entertainment',
				title : 'Entertainment',
			},
			{
				name  : 'miscellaneous-clothing',
				title : 'Clothing',
			},
			{
				name  : 'miscellaneous-travel',
				title : 'Travel',
			},
			{
				name  : 'miscellaneous-medical',
				title : 'Medical',
			},
			{
				name  : 'miscellaneous-personal-care',
				title : 'Personal Care',
			},
			{
				name  : 'miscellaneous-pet-supplies',
				title : 'Pet Supplies',
			},
		],
	},
];
