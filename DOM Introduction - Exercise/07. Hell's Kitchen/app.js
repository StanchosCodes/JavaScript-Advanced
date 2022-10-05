function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);
   let result = [];

   function onClick() {
      let input = JSON.parse(document.querySelector("#inputs textarea").value);
      // let text = JSON.parse(document.getElementById('inputs').children[1].value); does the same

      let bestRestourantParagraph = document.querySelector('#bestRestaurant p');
      // let bestRestourantParagraph = document.getElementById('bestRestaurant').children[2];
      // returns the paragraph where we want to place our output/result

      let bestRestaurantsWorkersParagraph = document.querySelector('#workers p');
      // let bestRestaurantsWorkersParagraph = document.getElementById('workers').children[2];
      // returns the paragraph where we will place the workers list

      for (let restourant of input) {
         let [name, workersList] = restourant.split(' - ');

         if (!result.find(r => r.name === name)) {
            result.push({
               name,
               averageSalary: 0,
               bestSalary: 0,
               sumSalary: 0,
               workers: []
            });
         }
         let currRestourant = result.find(r => r.name === name);

         for (let worker of workersList.split(', ')) {
            // workersList = workersList && workersList.split(', ') checks if the list have
            // any elements and then splits it, if its empty does nothing
            updateRestourant(currRestourant, worker);
         }
      }

      let bestRestaurant = result.sort((a, b) => b.averageSalary - a.averageSalary)[0];
      let output = `Name: ${bestRestaurant.name} Average Salary: ${bestRestaurant.averageSalary.toFixed(2)} Best Salary: ${bestRestaurant.bestSalary.toFixed(2)}`;
      bestRestourantParagraph.textContent += output;

      let workersListOutput = '';
      bestRestaurant.workers.sort((a, b) => b.salary - a.salary);

      for (let worker of bestRestaurant.workers) {
         workersListOutput += `Name: ${worker.name} With Salary: ${worker.salary} `;
      }

      bestRestaurantsWorkersParagraph.textContent += workersListOutput.trimEnd();
   }

   function updateRestourant(restourantObject, worker) {
      let [name, salary] = worker.split(' ');
      salary = Number(salary);

      restourantObject.sumSalary += salary;

      if (restourantObject.bestSalary < salary) {
         restourantObject.bestSalary = salary
      }
      restourantObject.workers.push({ name, salary });

      restourantObject.averageSalary = restourantObject.sumSalary / restourantObject.workers.length;
   }
}