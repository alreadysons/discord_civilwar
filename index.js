const { Client, GatewayIntentBits } = require('discord.js');
const dotenv = require('dotenv');

dotenv.config();

const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent] });

client.once('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.on('messageCreate', async message => {
    const prefix = '!';
    const args = message.content.slice(prefix.length).trim().split(/\s+/);
    const command = args.shift().toLowerCase();

    if (command === '팀') {
        if (args.length !== 10) {
            return message.channel.send('10명의 팀원 이름을 입력해주세요.');
        }

        // 중복 제거
        const uniqueArgs = [...new Set(args)];

        if (uniqueArgs.length !== 10) {
            return message.channel.send('중복되지 않는 10명의 팀원 이름을 입력해주세요.');
        }

        // 팀원 섞기
        const shuffled = uniqueArgs.sort(() => 0.5 - Math.random());

        // 팀 나누기
        const team1 = shuffled.slice(0, 5);
        const team2 = shuffled.slice(5, 10);

        message.channel.send(`**팀 1:** ${team1.join(', ')}\n**팀 2:** ${team2.join(', ')}`);
    } else if (command === '팀장') {
        if (args.length !== 10) {
            return message.channel.send('10명의 팀원 이름을 입력해주세요.');
        }

        // 중복 제거
        const uniqueArgs = [...new Set(args)];

        if (uniqueArgs.length !== 10) {
            return message.channel.send('중복되지 않는 10명의 팀원 이름을 입력해주세요.');
        }

        // 팀원 섞기
        const shuffled = uniqueArgs.sort(() => 0.5 - Math.random());

        // 팀장 뽑기
        const leaders = shuffled.slice(0, 2);

        message.channel.send(`**팀장:** ${leaders.join(', ')}`);
    } else if (command === '내전') {
        message.channel.send(`사용법:
1. **!팀 [이름1] [이름2] ... [이름10]**: 10명의 팀원 이름을 입력하면 두 팀으로 무작위로 나눕니다.
   예시: \`!팀 Alice Bob Charlie Dave Eve Frank Grace Hannah Isaac Jack\`
            
2. **!팀장 [이름1] [이름2] ... [이름10]**: 10명의 팀원 이름을 입력하면 두 명의 팀장을 무작위로 뽑습니다.
   예시: \`!팀장 Alice Bob Charlie Dave Eve Frank Grace Hannah Isaac Jack\`
            
3. **!내전**: 봇 사용법을 표시합니다.`);
    }
});

client.login(process.env.DISCORD_TOKEN);
