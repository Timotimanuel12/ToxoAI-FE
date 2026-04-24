import urllib.request
import os

images = {
    "tachyzoite-microscopy.jpg": "https://upload.wikimedia.org/wikipedia/commons/e/ef/Toxoplasma_gondii_tachy.jpg",
    "bradyzoite-microscopy.jpg": "https://upload.wikimedia.org/wikipedia/commons/2/24/Toxoplasma_gondii_tissue_cyst_in_mouse_brain.jpg",
    "oocyst-microscopy.jpg": "https://upload.wikimedia.org/wikipedia/commons/4/4f/Toxoplasma_gondii_unsporulated_oocyst.JPG"
}

opener = urllib.request.build_opener()
opener.addheaders = [('User-Agent', 'ToxoAI-Fetcher/1.0 (https://github.com/toxoai)')]
urllib.request.install_opener(opener)

for filename, url in images.items():
    print(f"Downloading {filename}...")
    try:
        if "/thumb/" not in url:
            # Add thumbnail path to get a reasonable sized image and prevent 404s on some files
            parts = url.split('/')
            parts.insert(5, 'thumb')
            parts.append(f"800px-{parts[-2]}")
            thumb_url = '/'.join(parts)
            try:
                urllib.request.urlretrieve(thumb_url, filename)
                print(f"Success (thumbnail): {filename}")
                continue
            except Exception as e:
                print(f"Thumbnail failed: {e}. Trying original...")
                
        urllib.request.urlretrieve(url, filename)
        print(f"Success: {filename}")
    except Exception as e:
        print(f"Failed to download {filename}: {e}")
