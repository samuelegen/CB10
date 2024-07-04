import React, { useState } from "react";
import style from "../src/App.module.css";

function Calculator() {
	const [formData, setFormData] = useState({
		amount: "",
		years: "",
		installment: null,
	});

	const handleInputChange = (e) => {
		const { name, value } = e.target;
		setFormData({ ...formData, [name]: value });
	};

	const handleCalculate = (e) => {
		e.preventDefault();
		const amountNum = parseFloat(formData.amount);
		const yearsNum = parseInt(formData.years);
		if (!isNaN(amountNum) && !isNaN(yearsNum) && yearsNum > 0) {
			const monthlyInstallment = amountNum / (yearsNum * 12);
			setFormData({ ...formData, installment: monthlyInstallment.toFixed(2) });
		} else {
			setFormData({ ...formData, installment: null });
		}
	};

	const handleClear = () => {
		setFormData({
			amount: "",
			years: "",
			installment: null,
		});
	};

	return (
		<>
			<form className={style.container} onSubmit={handleCalculate}>
				<div className={style.header}>
					<h2>Payment in installments</h2>
					<p onClick={handleClear}>clear all</p>
				</div>
				<div className={style.compilers}>
					<label>Amount</label>
					<input
						type="text"
						placeholder="€"
						name="amount"
						value={formData.amount}
						onChange={handleInputChange}
					/>
					<label>Years</label>
					<input
						type="text"
						name="years"
						value={formData.years}
						onChange={handleInputChange}
					/>
					{formData.installment !== null && (
						<div className={style.results}>
							<p>Monthly Installment: {formData.installment} EUR</p>
						</div>
					)}
					<div className={style.btnContainer}>
						<button type="submit">Calculate installments</button>
					</div>
				</div>
			</form>
		</>
	);
}

export default Calculator;
