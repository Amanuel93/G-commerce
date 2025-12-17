
// utils/downloadFile.ts
export async function downloadFile(fileName: string, fileUrl: string) {
  try {
    const encodedUrl = encodeURI(fileUrl)
    const res = await fetch(encodedUrl, {
    })

    if (!res.ok) {
      throw new Error(`Download failed (status ${res.status})`)
    }

    const contentType = res.headers.get("content-type") || ""
    if (!contentType.includes("pdf")) {
      console.warn("Downloaded resource content-type:", contentType)
    }

    const blob = await res.blob()
    const blobUrl = window.URL.createObjectURL(blob)

    const link = document.createElement("a")
    link.href = blobUrl
    link.download = fileName
    link.style.display = "none"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)

    // release memory
    window.URL.revokeObjectURL(blobUrl)
  } catch (error) {
    console.error("Error downloading file:", error)

    try {
      window.open(encodeURI(fileUrl), "_blank", "noopener,noreferrer")
    } catch (e) {
      alert("Failed to download catalog. Please try opening the catalog in a new tab.")
    }
  }
}
