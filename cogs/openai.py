import os
import discord
from discord.ext import commands

from utils.openai import ask_gpt, img_generation
from utils.utils import send_large_message


class Openai(commands.Cog):
    def __init__(self, bot):
        self.bot = bot
        self.allowed_channel_id = os.environ.get("ALLOWED_CHANNEL_ID")

    @discord.slash_command(
        name="chatgpt",
        description="Send a prompt to ChatGPT",
    )
    async def chat_gpt(self, ctx, prompt):
        await ctx.defer(ephemeral=True)
        answer = ask_gpt(prompt)
        await send_large_message(ctx, answer)

    @discord.slash_command(
        name="dalle",
        description="Send a prompt to Dall E 3",
    )
    async def dall_e(self, ctx, prompt):
        await ctx.defer(ephemeral=True)
        image_url = img_generation(prompt)
        embed = discord.Embed(
            title="AI Image", description=prompt, color=ctx.author.top_role.color
        )
        embed.set_image(url=image_url)
        await ctx.followup.send("Generation Complete!")
        await ctx.send(reference=ctx.message, embed=embed)


def setup(bot):
    bot.add_cog(Openai(bot))
