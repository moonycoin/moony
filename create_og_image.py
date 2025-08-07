#!/usr/bin/env python3

from PIL import Image, ImageDraw, ImageFont
import os

# Create image with white background
width, height = 1200, 630
image = Image.new('RGB', (width, height), '#ffffff')
draw = ImageDraw.Draw(image)

# Try to use a system font, fall back to default if not available
try:
    title_font = ImageFont.truetype('/System/Library/Fonts/Helvetica.ttc', 72)
    subtitle_font = ImageFont.truetype('/System/Library/Fonts/Helvetica.ttc', 24)
    brand_font = ImageFont.truetype('/System/Library/Fonts/Helvetica.ttc', 18)
except:
    try:
        title_font = ImageFont.truetype('/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf', 72)
        subtitle_font = ImageFont.truetype('/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf', 24)
        brand_font = ImageFont.truetype('/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf', 18)
    except:
        title_font = ImageFont.load_default()
        subtitle_font = ImageFont.load_default()
        brand_font = ImageFont.load_default()

# Colors
text_color = '#1d1d1f'
subtitle_color = '#515154'
pink_color = '#FF69B4'

# Add subtle gradient background (simulate with rectangles)
for y in range(height):
    alpha = y / height
    r = int(255 * (1 - alpha * 0.02))
    g = int(250 * (1 - alpha * 0.02))
    b = int(252 * (1 - alpha * 0.02))
    color = f'#{r:02x}{g:02x}{b:02x}'
    draw.rectangle([(0, y), (width, y+1)], fill=color)

# Main title
draw.text((80, 180), 'Decentralized', fill=text_color, font=title_font)
draw.text((80, 260), 'Digital Value', fill=text_color, font=title_font)

# Tagline
draw.text((80, 360), 'Permissionless transactions with Proof of Liquidity', 
          fill=subtitle_color, font=subtitle_font)

# Pink accent line
draw.rectangle([(80, 420), (200, 424)], fill=pink_color)

# Brand text
draw.text((80, 450), 'MOONY DOCUMENTS', fill=pink_color, font=brand_font)

# Simple moon icon (circle)
icon_x, icon_y = 915, 315
icon_radius = 65

# Icon glow (multiple circles with transparency)
for r in range(150, 60, -10):
    alpha = int(255 * 0.02)
    glow_color = f'#{255:02x}{105:02x}{180:02x}'
    draw.ellipse([icon_x - r, icon_y - r, icon_x + r, icon_y + r], 
                fill=None, outline=glow_color, width=2)

# Main moon circle
draw.ellipse([icon_x - icon_radius, icon_y - icon_radius, 
              icon_x + icon_radius, icon_y + icon_radius], 
             fill=text_color)

# Crescent highlight
highlight_color = '#ffffff'
draw.ellipse([icon_x - 40, icon_y - 45, icon_x + 10, icon_y - 5], 
             fill=highlight_color)

# Moon surface details (small craters)
draw.ellipse([icon_x - 25, icon_y - 30, icon_x - 15, icon_y - 20], 
             fill='#f0f0f0')
draw.ellipse([icon_x + 15, icon_y, icon_x + 25, icon_y + 10], 
             fill='#f0f0f0')
draw.ellipse([icon_x - 10, icon_y + 20, icon_x, icon_y + 30], 
             fill='#f0f0f0')

# Decorative dots
draw.ellipse([277, 47, 283, 53], fill=pink_color)
draw.ellipse([318, 33, 322, 37], fill=pink_color)
draw.ellipse([357, 42, 363, 48], fill=pink_color)

# Bottom accent line
draw.rectangle([(80, 520), (480, 522)], fill=pink_color)

# Subtle border
draw.rectangle([(2, 2), (width-2, height-2)], fill=None, outline=pink_color, width=1)

# Save the image
output_path = 'docs/public/og-image.png'
image.save(output_path, 'PNG', quality=95)

print(f"Open Graph image saved to: {output_path}")
print(f"Image dimensions: {width}x{height} pixels")