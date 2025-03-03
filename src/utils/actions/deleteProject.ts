export async function deleteProject(id: string) {
  try {
    const res = await fetch(`http://localhost:5000/api/v1/projects/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!res.ok) {
      throw new Error(`Failed to delete project: ${res.statusText}`);
    }

    const data = await res.json();
    return data; // Optionally return the response for further handling
  } catch (error) {
    console.error('Error deleting project:', error);
    throw error; // Rethrow for handling in the UI
  }
}
