export class DistributionModel {
    static create() {
        return new DistributionModel();
    }
    private moneyTypes = [1000,500,200,100,50,20,10,5,2,1];

    addMoneyTypes(newTypes: Array<number>) {
        this.moneyTypes = [...newTypes, ...this.moneyTypes];
    }

    getNotesAndCoins(value: number) {
        let result={};
        this.moneyTypes.sort((a,b) => b-a).forEach((type) => {
			let mulValue = Math.floor(value / type); 
			if (mulValue >= 1) {                                     
				result[type] = mulValue; 
				value %= type;
			}
        });
        return result;
    }

}