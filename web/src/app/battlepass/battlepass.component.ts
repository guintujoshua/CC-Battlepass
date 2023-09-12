import { Component } from '@angular/core';

@Component({
  selector: 'app-battlepass',
  templateUrl: './battlepass.component.html',
  styleUrls: ['./battlepass.component.scss']
})
export class BattlepassComponent {

  battlePassData = [
    { level: 1, reward: "Reward 1: Description for Reward 1" ,claimed:true,img:"https://media.discordapp.net/attachments/1124259368939048990/1125741065111093298/cabalen_city_logo.png?width=700&height=700"},
    { level: 1, reward: "Reward 1: Description for Reward 1" ,claimed:true,img:"https://media.discordapp.net/attachments/1124259368939048990/1125741065111093298/cabalen_city_logo.png?width=700&height=700"},
    { level: 1, reward: "Reward 1: Description for Reward 1" ,claimed:true,img:"https://media.discordapp.net/attachments/1124259368939048990/1125741065111093298/cabalen_city_logo.png?width=700&height=700"},
    { level: 1, reward: "Reward 1: Description for Reward 1" ,claimed:true,img:"https://media.discordapp.net/attachments/1124259368939048990/1125741065111093298/cabalen_city_logo.png?width=700&height=700"},
    { level: 1, reward: "Reward 1: Description for Reward 1" ,claimed:true,img:"https://media.discordapp.net/attachments/1124259368939048990/1125741065111093298/cabalen_city_logo.png?width=700&height=700"},
    { level: 1, reward: "Reward 1: Description for Reward 1" ,claimed:true,img:"https://media.discordapp.net/attachments/1124259368939048990/1125741065111093298/cabalen_city_logo.png?width=700&height=700"},
    { level: 1, reward: "Reward 1: Description for Reward 1" ,claimed:true,img:"https://media.discordapp.net/attachments/1124259368939048990/1125741065111093298/cabalen_city_logo.png?width=700&height=700"},
    { level: 1, reward: "Reward 1: Description for Reward 1" ,claimed:true,img:"https://media.discordapp.net/attachments/1124259368939048990/1125741065111093298/cabalen_city_logo.png?width=700&height=700"},
    { level: 1, reward: "Reward 1: Description for Reward 1" ,claimed:true,img:"https://media.discordapp.net/attachments/1124259368939048990/1125741065111093298/cabalen_city_logo.png?width=700&height=700"},
    { level: 1, reward: "Reward 1: Description for Reward 1" ,claimed:true,img:"https://media.discordapp.net/attachments/1124259368939048990/1125741065111093298/cabalen_city_logo.png?width=700&height=700"},
    { level: 1, reward: "Reward 1: Description for Reward 1" ,claimed:true,img:"https://media.discordapp.net/attachments/1124259368939048990/1125741065111093298/cabalen_city_logo.png?width=700&height=700"},
    { level: 1, reward: "Reward 1: Description for Reward 1" ,claimed:true,img:"https://media.discordapp.net/attachments/1124259368939048990/1125741065111093298/cabalen_city_logo.png?width=700&height=700"},
    { level: 1, reward: "Reward 1: Description for Reward 1" ,claimed:true,img:"https://media.discordapp.net/attachments/1124259368939048990/1125741065111093298/cabalen_city_logo.png?width=700&height=700"},
    { level: 1, reward: "Reward 1: Description for Reward 1" ,claimed:true,img:"https://media.discordapp.net/attachments/1124259368939048990/1125741065111093298/cabalen_city_logo.png?width=700&height=700"},
    { level: 1, reward: "Reward 1: Description for Reward 1" ,claimed:true,img:"https://media.discordapp.net/attachments/1124259368939048990/1125741065111093298/cabalen_city_logo.png?width=700&height=700"},
    // Add more levels and rewards as needed
  ];

current = 5
  progress: number = 50; // Set the initial progress value

  // Define a function to update the progress value
  updateProgress(newProgress: number) {
    this.progress = newProgress;
  }
}
